from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# SQLALCHAMY_DATABASE_URL = "postgresql://postgres:@localhost:5432/ecomfastreact"
SQLALCHAMY_DATABASE_URL = "sqlite:///database.sqlite3"

engine = create_engine(SQLALCHAMY_DATABASE_URL)

SessionLocal = sessionmaker(bind=engine, autocommit=False, autoflush=False)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
