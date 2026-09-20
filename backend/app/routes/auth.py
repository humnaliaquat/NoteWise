from fastapi import APIRouter, HTTPException

from app.database.database import users_collection
from app.schemas.auth import CreateUser, UserLogin
from app.services.auth_service import hash_password, verify_password
from app.services.jwt_service import create_access_token

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/signup")
def signup(user: CreateUser):
    existing_user = users_collection.find_one({
        "email": user.email
    })

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )
    hashed_password = hash_password(user.password)

    new_user = {
        "username": user.username,
        "email": user.email,
        "password": hashed_password
    }
    result = users_collection.insert_one(new_user)

    return {
        "message": "User created successfully",
        "user_id": str(result.inserted_id),
        "username": user.username,
        "email": user.email
    }


@router.post("/login")
def login(user: UserLogin):
    existing_user = users_collection.find_one({
        "email": user.email
    })

    if not existing_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    password_correct = verify_password(
        user.password,
        existing_user["password"]
    )
    if not password_correct:
        raise HTTPException(
            status_code=400,
            detail="Invalid email or password"
        )

    access_token = create_access_token(str(existing_user["_id"]))
    return {
        "message": "Login successful",
        "access_token": access_token,
        "token_type": "bearer",
        "user": {
            "id": str(existing_user["_id"]),
            "username": existing_user["username"],
            "email": existing_user["email"]
        }
    }
