from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_login_pac():
    resp = client.post("/api/login", json={"email": "pac@example.com", "password": "test"})
    assert resp.status_code == 200
    assert resp.json()["user"]["role"] == "pac"

def test_pac_dashboard():
    resp = client.get("/api/pac/dashboard")
    data = resp.json()
    assert "funds" in data
    assert isinstance(data["transactions"], list)
