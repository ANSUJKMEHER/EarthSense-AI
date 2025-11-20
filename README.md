

```md
# 🌍 EarthSense AI — Satellite-based Deforestation Detection
**Real-Time AI Model for Environmental Monitoring using Space Data**  
_Built for SkyHack 2025 — Track: AI/ML for Space Data Interpretation_

---

![EarthSense Banner](images/banner.png)

---

## 🚀 Overview

**EarthSense AI** is a deep-learning powered platform that detects **deforestation** from satellite imagery instantly.  
It converts raw Earth observation images into **clear, actionable environmental insights** for researchers, NGOs, agencies, and policymakers.

This project demonstrates an end-to-end system: image → AI inference → explainability → vegetation metrics → visual dashboard.

---

# 🎯 Key Features

- **Real-Time Deforestation Detection** — instant binary prediction (Deforested / Non-Deforested)  
- **Vegetation Cover Estimation** — green-pixel fraction (proxy for forest density)  
- **Explainable AI (Grad-CAM)** — heatmaps that show *why* the model predicted a label  
- **Batch Processing** — analyze many images and export results  
- **Polished Frontend** — clean React + Vite UI for judges & demo

---

# 🖼️ Screenshots

> All screenshots are stored under `images/` — please ensure the filenames match exactly.

### 1) Banner / Title
![Banner — EarthSense AI](images/banner.png)
*Project banner used in documentation and presentation.*

---

### 2) Homepage / Dashboard
![Homepage — EarthSense AI](images/home.png)
*Main UI showing telemetry, quick actions, and links to single / batch analysis.*

---

### 3) Single Image Prediction
![Single Image Prediction](images/single.png)
*Upload a satellite image and receive: prediction, confidence, vegetation fraction, and Grad-CAM.*

---

### 4) Batch Processing & Summary
![Batch Processing](images/batch.png)
*Run batch inference, view summary statistics, and download CSV of results.*

---

# 🧩 Problem Statement

Large-scale deforestation is accelerating climate change and biodiversity loss. Satellites capture huge volumes of imagery, but analyzing them at scale requires automated, explainable, and efficient systems.

**Goal:** Build a fast, explainable tool that detects deforestation from satellite images and produces interpretable metrics.

---

# 🧭 What EarthSense AI Does

1. Accepts satellite/top-down images (single or batch).  
2. Preprocesses images for model input (resize, normalize).  
3. Runs an efficient CNN-based classifier to predict deforestation.  
4. Computes a vegetation fraction using color-space analysis.  
5. Generates Grad-CAM heatmaps for explainability.  
6. Returns results to UI (label, confidence, veg fraction, heatmap).  

---

# 🧬 Technical Summary

**Model:** TensorFlow / Keras CNN (transfer-learning + classifier head)  
**Explainability:** Grad-CAM (base64 image returned)  
**Vegetation Estimation:** HSV-based green mask (pixel fraction)  
**Frontend:** React + Vite (UploadCard + BatchUpload components)  
**Backend:** Flask API (predict, batch_predict endpoints)  
**Image tools:** OpenCV, Pillow

---

# 📁 Project Structure

--

earthsense-ai/
│
├── backend/
│   ├── app.py
│   ├── utils.py
│   ├── requirements.txt
│   ├── model/
│   │   └── class_indices.json
│   └── .env (ignored)
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
└── README.md

````

---

# 📊 Example Inference Output

```json
{
  "prediction": "Deforested",
  "confidence": 0.9321,
  "vegetation_fraction": 0.147,
  "gradcam_base64": "<base64-string>",
  "inference_time_ms": 312
}
---

---

# 🔍 Planning & Development Workflow

**Phase 1 — Research**

* Surveyed datasets (deforestation, flood, landslide)
* Chose deforestation for cleaner demo and available labeled data

**Phase 2 — Model**

* Preprocessing + augmentation
* Transfer learning (MobileNetV2 or similar) → classifier head
* Validation, confusion matrix analysis, early stopping

**Phase 3 — Backend**

* Flask inference API, image preprocessing, Grad-CAM utility
* Batch processing endpoint & CSV exporter

**Phase 4 — Frontend**

* React UI: Single prediction + Batch dashboard + result visualization

**Phase 5 — Integration & Polish**

* UX improvements (dark theme, progress bars)
* Add downloadable results and Grad-CAM images
* Prepare submission assets (README, screenshots, demo flow)

---

# 🌍 Real-World Use Cases

* Real-time monitoring for conservationists
* Rapid assessment of cleared areas for law enforcement
* Input layer for climate impact assessments
* Pre-filter for high-resolution follow-up imaging or field surveys

---

# 🔭 Roadmap & Future Enhancements

* Extend to **flood** and **landslide** detection using appropriate datasets
* Add **time-series change detection** (multi-temporal imagery)
* Integrate **SAR** (radar) data for all-weather monitoring
* Build a **global dashboard** showing deforestation hotspots and trends
* Add **user accounts** and project-based batch runs for NGOs

---

# 👥 Team

**Ansuj K Meher** — Project lead (AI/ML, CV, full-stack)
(Contact: [ansujkmeher@gmail.com](mailto:ansujkmeher@gmail.com))

---

# 🌱 Closing Note

EarthSense AI is a compact, explainable, and demo-ready pipeline that shows how AI + satellite imagery can be turned into actionable environmental intelligence. This submission focuses on clarity, explainability, and user-friendly presentation for judges and stakeholders.

---

