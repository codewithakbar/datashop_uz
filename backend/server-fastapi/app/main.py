from fastapi import FastAPI
from config.database import engine
from config.database import Base
from auth import authrouter
from users import usersrouter
from review import reviewrouter
from product import productrouter
from order import orderrouter

from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


Base.metadata.create_all(bind=engine)


@app.get("/")
def hello():
    return "Hello"


app.include_router(authrouter.router)
app.include_router(usersrouter.router)
app.include_router(reviewrouter.router)
app.include_router(productrouter.router)
app.include_router(orderrouter.router)
