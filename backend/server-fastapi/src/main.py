from typing import Union
from tortoise import models
from fastapi import FastAPI, HTTPException, Request, status
from tortoise.contrib.fastapi import register_tortoise
from auth.models import *
from auth.authentication import (get_hashed_password, very_token)

#signals
from tortoise.signals import post_save
from typing import List, Optional, Type
from tortoise import BaseDBAsyncClient

from auth.emails import *

# response classes
from fastapi.responses import HTMLResponse

#templates
from fastapi.templating import Jinja2Templates


app = FastAPI()


@post_save(User)
async def create_business(
    sender: "Type[User]",
    instance: User,
    created: bool,
    using_db: "Optional[BaseDBAsyncClient]",
    update_fields: List[str]
) -> None:
    if created:
        business_obj = await Business.create(
            business_name = instance.username, owner = instance
        )

        await business_pydantic.from_tortoise_orm(business_obj)
        # send the email
        await send_email([instance.email], instance)



@app.post("/registration")
async def user_registrations(user: user_pydanticIn):
    user_info = user.dict(exclude_unset=True)
    user_info["password"] = get_hashed_password(user_info["password"])
    user_obj = await User.create(**user_info)
    new_user = await user_pydantic.from_tortoise_orm(user_obj)
    return {
        "status": "ok",
        "data": f"Salom {new_user.username}, Iltimos Email pochtangizni tasdiqlang!"
    }


templates = Jinja2Templates(directory="templates")
@app.get("/verification",  response_class=HTMLResponse)
async def email_verification(request: Request, token: str):
    user = await very_token(token)

    if user and not user.is_verified:
        user.is_verified = True
        await user.save()
        return templates.TemplateResponse(
            "verification.html", {
                "request":request,
                "username":user.username
                }
            )

    raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="INVALID token or expired token",
            headers={"WWW-Authenticate": "Bearer"}
        )

@app.get("/")
def index():
    return {"Salom": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

    
register_tortoise(
    app,
    db_url="sqlite://db.sqlite3",
    modules={"models": ["auth.models"]},
    generate_schemas=True,
    add_exception_handlers=True
)