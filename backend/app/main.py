from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import notes
from app.routes.documents import router as documents_router
from app.routes.search import router as search_router
from app.routes.chat import router as chat_router
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
app.include_router(documents_router)
app.include_router(search_router)
app.include_router(chat_router)


@app.get("/")
def home():
    return {
        "message": "Welcome to DocWise's backend"
    }
