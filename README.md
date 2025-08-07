# Galveston Group Demo

Galveston Group is a political finance platform demo featuring a Python FastAPI backend and a React frontend. The demo supports two roles: PAC organisations and individual donors. Each role receives a tailored dashboard for tracking funds, donations and portfolios.

## Development

### Run the App
```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
Then open [http://localhost:8000](http://localhost:8000) in a browser to use the demo. The FastAPI server also serves the React frontend from the `frontend` directory.

## Testing
```
cd backend
pytest
```
```
cd frontend
npm test
```
