from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import notes
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    notes.router,
    prefix="/notes",
    tags=["Notes"]
)


@app.get("/")
def home():
    return {
        "message": "Welcome to DocWise's backend"
    }
