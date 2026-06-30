


---

<div align="center">

# 🌍 **EarthSense AI**  
### 🛰️ *Satellite-based Deforestation Detection System*  
**AI + Earth Observation for Sustainable Planet Monitoring**

Built for **SkyHack 2025 — AI/ML for Space Data Interpretation**  
🔥 *Real-time Inference · Explainable AI · Batch Analysis · Clean UI*
---

<img src="images/banner.png?raw=true" width="100%" />

</div>

---

# 🚀 **Overview**

**EarthSense AI** is a complete deep-learning pipeline that detects **deforestation** instantly using satellite imagery.  
The system converts raw Earth data into **clear, actionable environmental insights** through:

- 🌲 Forest-loss prediction  
- 🟩 Vegetation cover estimation  
- 🔥 Grad-CAM explainability  
- 📦 Batch processing with exports  
- 💻 Modern frontend UI  

It is designed for researchers, conservation groups, space agencies, hackathon judges & real-world deployments.

---

# 🎯 **Core Features**

### ⚡ Real-Time Deforestation Detection  
Instant prediction with high accuracy.

### 🌿 Vegetation Density Measurement  
HSV-based green mask to detect forest density.

### 🔥 Explainable AI (Grad-CAM)  
Highlights the regions influencing the prediction.

### 📂 Batch Image Analysis  
Upload multiple images → get CSV results.

### 💻 Sleek React Frontend  
Modern dark UI built with Vite + React.

### 🔗 Simple Flask API  
Fast endpoints for single & batch predictions.

---

# 🖼️ **Screenshots**

### 🏠 **Homepage**
<p align="center">
  <img src="images/home.png?raw=true" width="90%" />
</p>

---

### 🖼️ **Single Image Prediction**
<p align="center">
  <img src="images/single.png?raw=true" width="90%" />
</p>

---

### 📦 **Batch Processing Dashboard**
<p align="center">
  <img src="images/batch.png?raw=true" width="90%" />
</p>

---

# 🧩 **Problem Statement**

Deforestation is increasing globally, causing:

- 🌡️ Climate instability  
- 🐾 Biodiversity loss  
- 🌧️ Extreme weather  
- 🏞️ Land degradation  

Satellite imagery is abundant — but requires **automated, explainable, scalable** analysis.

**EarthSense AI solves this** with a fast, interpretable model and intuitive dashboard.

---

# 🧭 **How It Works**

### 📤 1. Upload Image  
Single or batch.

### 🔧 2. Preprocessing  
Resize → Normalize → Transform.

### 🤖 3. CNN Model Prediction  
Detects: **Deforested / Not Deforested**  
Returns confidence score.

### 🌿 4. Vegetation Fraction  
HSV mask to estimate greenery.

### 🔥 5. Grad-CAM  
Highlights important image regions.

### 📥 6. UI Visualization  
Frontend displays all metrics + heatmap.

---

# 🧬 **Tech Stack**

### 🧠 Model  
- TensorFlow / Keras (Transfer Learning: MobileNetV2)  
- Custom classifier head  
- Trained on labeled deforestation datasets  

### 🧪 Explainability  
- Grad-CAM (OpenCV + Keras)

### 🖼️ Image Processing  
- OpenCV  
- Pillow  

### 🧰 Backend  
- Python Flask  
- REST API for prediction & batch inference  

### 💻 Frontend  
- React + Vite  
- Dark theme UI  
- CSV export, toast notifications  

---



```txt
earthsense-ai/
│
├── backend/
│   ├── app.py
│   ├── utils.py
│   ├── requirements.txt
│   ├── model/
│   │   └── class_indices.json
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx
│       ├── api.jsx
│       └── components/
│           ├── UploadCard.jsx
│           └── BatchUpload.jsx
│
└── images/
    ├── banner.png
    ├── home.png
    ├── single.png
    └── batch.png
```
---

📊 Sample API Output

```json
{
  "prediction": "Deforested",
  "confidence": 0.93,
  "vegetation_fraction": 0.14,
  "gradcam_base64": "<base64>",
  "inference_time_ms": 312
}
```
---

🛠️ Development Flow (Short & Clear)

1️⃣ Model

Preprocessing

Transfer learning (MobileNetV2)

Training & evaluation


2️⃣ Backend

Flask API (predict + batch_predict)

Grad-CAM generator

Image utilities (OpenCV + Pillow)


3️⃣ Frontend

React + Vite interface

Single & batch upload UI

Confidence, vegetation %, heatmap display


4️⃣ Integration

Connect API ↔ frontend

UI polish & error handling

Prepare screenshots + final testing



---

🌍 Use Cases

Forest-loss monitoring

Rapid environmental audits

Illegal logging detection

Research & climate studies

Satellite image pre-filtering



---

🔭 Future Enhancements

Flood & landslide detection

Multi-temporal change analysis

SAR-based processing

Global deforestation dashboard

User accounts + cloud storage



---

👤 Developer

Ansuj K Meher
AI/ML & Full-Stack Developer.
📧 ansujkmeher@gmail.com


---




<div align="center">🌱 EarthSense AI — Turning Satellite Data Into Environmental Intelligence.



</div>
```
---


