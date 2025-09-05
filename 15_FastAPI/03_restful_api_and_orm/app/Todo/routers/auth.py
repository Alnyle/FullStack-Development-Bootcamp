from fastapi import APIRouter, Depends, HTTPException, Path
from sqlalchemy.orm import Session
from pydantic import BaseModel
from models import Users
from starlette import status
from database import SessionLocal
from typing import Annotated

def get_db():
    
    db = SessionLocal()
    
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)]

router = APIRouter()

class CreateUserRequest(BaseModel):
    
    email: str
    username: str
    first_name: str
    last_name: str
    password: str
    role: str



@router.get('/auth', status_code=status.HTTP_200_OK)
async def get_user(db: db_dependency):
     
    return db.query(Users).all()


@router.get('/auth/{id}', status_code=status.HTTP_200_OK)
async def get_user(db: db_dependency, id: int):
    
    
    user = db.query(Users).filter(Users.id == id).first()
    
    if user is not None:
        return user
    
    raise HTTPException(status_code=404, detail="User not found.")


@router.post('/auth')
async def create_user(create_user_request: CreateUserRequest):
    
    create_user_model = Users(
        email=create_user_request.email,
        username=create_user_request.username,
        first_name=create_user_request.first_name,
        last_name=create_user_request.last_name,
        role=create_user_request.role,
        hashed_password=create_user_request.password,
        is_active=True,
    )
    
    return create_user_model