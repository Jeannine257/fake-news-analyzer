from fastapi import APIRouter, HTTPException
from app.schemas import AnalyzeRequest, AnalyzeResponse
from app.services.gemini_service import analyze_text

router = APIRouter()

@router.post("/analyze", response_model=AnalyzeResponse)
async def analyze(request: AnalyzeRequest):
    try:
        result = analyze_text(request.texte)
        return AnalyzeResponse(**result)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal server error")