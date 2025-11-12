```dockerfile
FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
ENV DATABASE_URL=postgresql://carbon:carbonpass@db:5432/carbon_db
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]