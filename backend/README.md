# Fake News Detector AI Backend

Backend FastAPI pour détecter les fake news en utilisant Google Gemini.

## Structure du projet

```
backend/
├── app/
│   ├── main.py             # Point d’entrée FastAPI
│   ├── config.py           # Configuration (clé API)
│   ├── schemas.py          # Modèles Pydantic
│   ├── services/
│   │   └── gemini_service.py  # Service Google Gemini
│   └── routes/
│       └── analyze.py      # Route d’analyse
├── requirements.txt
└── README.md
```

## Installation

1. Clonez le repository et naviguez vers le dossier backend :
   ```
   cd backend
   ```

2. Créez un environnement virtuel :
   ```
   python -m venv venv
   ```

3. Activez l’environnement virtuel :
   - Windows : `venv\Scripts\activate`
   - Linux/Mac : `source venv/bin/activate`

4. Installez les dépendances :
   ```
   pip install -r requirements.txt
   ```

## Configuration

1. Créez un fichier `.env` dans le dossier `backend` :
   ```
   GEMINI_API_KEY=votre_clé_api_ici
   ```

2. Obtenez une clé API Google Gemini depuis [Google AI Studio](https://makersuite.google.com/app/apikey).

## Lancement

Pour lancer le serveur en mode développement :
```
uvicorn app.main:app --reload
```

Le serveur sera accessible sur `http://127.0.0.1:8000`.

## API

### POST /analyze

Analyse un texte pour détecter s'il s'agit de fake news.

**Requête :**
```json
{
  "texte": "Votre texte à analyser ici"
}
```

**Réponse :**
```json
{
  "fiable": true,
  "score": 85,
  "explication": "Le texte semble fiable car il cite des sources vérifiées."
}
```

## Déploiement

Ce backend est prêt pour le déploiement sur Render, Railway ou un VPS.

### Sur Render :
1. Connectez votre repository GitHub.
2. Sélectionnez le dossier `backend` comme root.
3. Définissez la commande de build : `pip install -r requirements.txt`
4. Commande de start : `uvicorn app.main:app --host 0.0.0.0 --port $PORT`

### Variables d'environnement :
- `GEMINI_API_KEY` : Votre clé API Google Gemini

## Technologies utilisées

- FastAPI
- Google Generative AI (Gemini)
- Pydantic
- Uvicorn
- python-dotenv