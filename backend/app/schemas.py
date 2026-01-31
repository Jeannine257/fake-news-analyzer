from pydantic import BaseModel

class AnalyzeRequest(BaseModel):
    texte: str

class AnalyzeResponse(BaseModel):
    fiable: bool
    score: int
    explication: str