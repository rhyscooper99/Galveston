# Galveston Group Demo

Galveston Group is a political finance platform demo featuring a Python FastAPI backend and a React frontend. The demo supports two roles: PAC organisations and individual donors. Each role receives a tailored dashboard for tracking funds, donations and portfolios.

## Development

### Backend
```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend
Open `frontend/index.html` in a browser. The page uses CDN builds of React and Tailwind, so no build step is required.

## Testing
```
cd backend
pytest
```
```
cd frontend
npm test
```
