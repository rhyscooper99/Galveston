from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Galveston Group API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LoginRequest(BaseModel):
    email: str
    password: str

USERS = {
    "pac@example.com": {"password": "test", "role": "pac", "name": "Green Future PAC"},
    "donor@example.com": {"password": "test", "role": "donor", "name": "Jane Donor"},
}

PAC_DASHBOARD = {
    "funds": 250000,
    "transactions": [
        {"type": "donation", "amount": 5000, "source": "John Doe"},
        {"type": "disbursement", "amount": 2000, "target": "Campaign X"},
    ],
    "portfolio": [
        {"candidate": "Alice Smith", "amount": 10000},
        {"candidate": "Bob Johnson", "amount": 15000},
    ],
}

DONOR_DASHBOARD = {
    "top_pacs": [
        {"name": "Green Future PAC", "policy_tags": ["climate", "energy"]},
        {"name": "Liberty Now PAC", "policy_tags": ["defense", "economy"]},
    ],
    "portfolio": [
        {"pac": "Green Future PAC", "amount": 200},
        {"pac": "Liberty Now PAC", "amount": 150},
    ],
}

@app.post("/login")
async def login(data: LoginRequest):
    user = USERS.get(data.email)
    if not user or user["password"] != data.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"token": "fake-token", "user": {"email": data.email, "role": user["role"], "name": user["name"]}}

@app.get("/pac/dashboard")
async def pac_dashboard():
    return PAC_DASHBOARD

@app.get("/donor/dashboard")
async def donor_dashboard():
    return DONOR_DASHBOARD
