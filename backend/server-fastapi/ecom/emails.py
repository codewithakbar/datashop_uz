from typing import List

from models import User
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from pydantic import EmailStr
import jwt

from dotenv import dotenv_values

from config import get_settings

SITE_URL = get_settings().SITE_URL
SITE_NAME = get_settings().SITE_NAME

config_credentials = dict(dotenv_values(".env"))

# conf = ConnectionConfig(
#     MAIL_USERNAME = config_credentials["EMAIL"],
#     MAIL_PASSWORD = config_credentials["PASS"],
#     MAIL_FROM = config_credentials["EMAIL"],
#     MAIL_PORT = 465,
#     MAIL_SERVER = "smtp.gmail.com",
#     MAIL_STARTTLS = False,
#     MAIL_SSL_TLS = True,
#     USE_CREDENTIALS = True,
#     VALIDATE_CERTS = True
# )

conf = ConnectionConfig(
    MAIL_USERNAME=get_settings().MAIL_USERNAME,
    MAIL_PASSWORD=get_settings().MAIL_PASSWORD,
    MAIL_FROM = get_settings().MAIL_USERNAME,
    MAIL_PORT=465,
    MAIL_SERVER = "smtp.gmail.com",
    MAIL_STARTTLS = False,
    MAIL_SSL_TLS = True,
    # MAIL_TLS=True,
    # MAIL_SSL=False,
    USE_CREDENTIALS = True,
    VALIDATE_CERTS = True
)


async def send_mail(email: List[EmailStr], instance: User):
    """send Account Verification mail"""

    token_data = {
        "id": instance.id,
        "username": instance.username,
        "email": instance.email
    }

    token = jwt.encode(token_data, get_settings().SECRET, algorithm="HS256")

    template = f"""
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
    </head>
    <body>
        <div style = "display:flex; align-items: center; flex-direction: column" >
            <h3>Account Verification</H3>

            <br>

            <p>
                Thanx for choosing us, please click on the button below
                to verify your account
            </p> 
            
            <a style = "display:marign-top: 1rem ; padding: 1rem; border-redius: 0.5rem;
             font-size:1rem; text-decoration: no; background: #0275d8; color:white"
             href="{SITE_URL}/verification/email/?token={token}">
                Verify your email
             </a>
        </div>
    </body>
    </html>
    """
    # print(f"""

    # your mail:
    # {SITE_URL}verification/email/?token={token}

    # """)

    message = MessageSchema(
        subject=SITE_NAME + " account verification",
        recipients=email,  # List of recipients,
        body=template,
        subtype="html"
    )
    fm = FastMail(conf)
    await fm.send_message(message)
