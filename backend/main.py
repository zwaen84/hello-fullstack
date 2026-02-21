from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS: Erlaubt dem Frontend (React) mit dem Backend zu reden
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Unser erster API-Endpoint
@app.get("/")
def hello():
    return {"message": "Hallo! Ich bin dein Backend. Die Küche ist geöffnet!"}