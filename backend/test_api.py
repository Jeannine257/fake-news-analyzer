import requests

# Test the root endpoint
response = requests.get("http://127.0.0.1:8001/")
print("Root endpoint:", response.json())

# Test the analyze endpoint
data = {"texte": "This is a test news article that is completely reliable."}
response = requests.post("http://127.0.0.1:8001/analyze", json=data)
print("Analyze endpoint:", response.json())