import google.generativeai as genai
from app.config import GEMINI_API_KEY
import json
import re

genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel("gemini-flash-latest")

def analyze_text(text: str) -> dict:
    prompt = f"""
    Analyze the following text for fake news. Determine if it's reliable or not.
    Provide a realistic assessment based on factual accuracy, sources, and credibility.
    
    Return ONLY a JSON object with exactly these keys:
    - "fiable": boolean (true if the information appears verified/true, false if it seems false/fake)
    - "score": integer from 0 to 100 (reliability score - vary this realistically, not always 85)
    - "explication": string (brief explanation in French, indicating if verified, false, or uncertain)

    For the explication, use these guidelines:
    - If score >= 80: Say something like "Cette information semble vérifiée et fiable."
    - If score <= 20: Say something like "Cette information semble être une fake news ou inexacte."
    - If 21 <= score <= 79: Say something like "Cette information est moyennement fiable, nécessite vérification supplémentaire."

    Do not include any other text, markdown, or formatting.

    Text: {text}

    JSON:
    """
    try:
        response = model.generate_content(prompt)
        result_text = response.text.strip()
        # Remove any markdown code blocks
        result_text = re.sub(r'```json\s*', '', result_text)
        result_text = re.sub(r'```\s*', '', result_text)
        # Try to parse as JSON
        result = json.loads(result_text)
        # Validate keys
        if not all(key in result for key in ["fiable", "score", "explication"]):
            raise ValueError("Invalid response structure")
        if not isinstance(result["fiable"], bool):
            raise ValueError("fiable must be boolean")
        if not isinstance(result["score"], int) or not (0 <= result["score"] <= 100):
            raise ValueError("score must be int 0-100")
        if not isinstance(result["explication"], str):
            raise ValueError("explication must be string")
        # Override fiable based on score for consistency
        result["fiable"] = result["score"] >= 60
        return result
    except json.JSONDecodeError:
        raise ValueError("Response is not valid JSON")
    except Exception as e:
        raise ValueError(f"Error analyzing text: {str(e)}")