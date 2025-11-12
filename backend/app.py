# backend/app.py
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pandas as pd
import os, traceback
from io import BytesIO
from typing import Optional

from carbon_model import intelligent_carbon_model, generate_synthetic_industry

app = FastAPI(title="Carbon Hack API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

os.makedirs("data", exist_ok=True)
os.makedirs("models", exist_ok=True)

@app.post("/api/v1/upload_dataset")
async def upload_dataset(file: UploadFile = File(...)):
    if not file.filename.lower().endswith(".csv"):
        raise HTTPException(status_code=400, detail="Please upload a CSV file")
    contents = await file.read()
    df = pd.read_csv(BytesIO(contents))
    save_path = os.path.join("data", file.filename)
    df.to_csv(save_path, index=False)
    return {"message": "dataset uploaded", "rows": len(df), "path": save_path}

class ModelRunRequest(BaseModel):
    mode: str
    dataset_file: Optional[str] = None
    months_to_predict: Optional[int] = 6
    payload: Optional[dict] = None

@app.post("/api/v1/model/run")
def run_model(req: ModelRunRequest):
    try:
        mode = req.mode.lower()
        if mode == "individual":
            if not req.payload:
                raise HTTPException(status_code=400, detail="individual mode requires a payload")
            out = intelligent_carbon_model("individual", req.payload, months_to_predict=req.months_to_predict or 6)
            return out
        elif mode == "industry":
            if req.dataset_file:
                path = os.path.join("data", req.dataset_file)
                if not os.path.exists(path):
                    raise HTTPException(status_code=400, detail=f"Dataset not found: {req.dataset_file}")
                df = pd.read_csv(path)
            else:
                df = generate_synthetic_industry(months=36)
            out = intelligent_carbon_model("industry", df, months_to_predict=req.months_to_predict or 6)
            return out
        elif mode == "national":
            out = intelligent_carbon_model("national", None, months_to_predict=req.months_to_predict or 6)
            return out
        else:
            raise HTTPException(status_code=400, detail=f"Unknown mode {req.mode}")
    except Exception as e:
        tb = traceback.format_exc()
        raise HTTPException(status_code=500, detail=f"{str(e)}\n{tb}")
