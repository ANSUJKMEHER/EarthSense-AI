
---

# 🌍 **EarthSense AI — Intelligent Deforestation Detection Platform**

*A Real-Time AI System for Environmental Risk Analysis using Satellite Imagery*
**Built for SkyHack 2025**

---

![EarthSense Banner](images/earthsense-banner.png)

---

## 🚀 **Overview**

**EarthSense AI** is an advanced web platform that uses **Deep Learning + Space Data** to detect **deforestation** from satellite imagery in real-time.
It transforms raw space-based images into **actionable environmental intelligence**, making it useful for:

* Environmental agencies
* Disaster management teams
* Researchers
* Conservation NGOs
* Policy makers

Built for the **AI/ML for Space Data Interpretation** track, the system showcases how AI can extract meaningful insights from Earth observation data.

---

## 🏆 **Purpose & Impact**

Deforestation contributes to:

* Climate change
* Biodiversity loss
* Flooding / soil erosion
* Reduced carbon capture

Existing forest monitoring tools are slow or expensive.
**EarthSense AI democratizes environmental monitoring** with:

* Instant AI predictions
* Visual explainability
* Batch analysis
* Scalable, modular architecture

It is a step toward **planet-scale environmental intelligence**.

---

# 🎯 **Key Features**

---

## 🔍 **1. Real-time Deforestation Detection**

Upload a satellite image → receive instant prediction:

* **Deforested**
* **Non-Deforested**

![Prediction Example](images/prediction-example.png)

---

## 🧠 **2. Explainable AI (Grad-CAM)**

Shows “why” the model predicted deforestation.

![GradCAM Example](images/gradcam-example.png)

---

## 🌱 **3. Vegetation Cover Estimation**

EarthSense measures **green pixel percentage** to estimate vegetation density.

![Vegetation Cover](images/vegetation-cover.png)

---

## 📦 **4. Batch Image Analysis**

Upload folders of satellite images and analyze dozens/hundreds at once.

![Batch Screenshot](images/batch-processing.png)

---

## 🖥️ **5. Modern User-Friendly Interface**

* Clean
* Responsive
* Minimalistic
* Hackathon-ready design

![Homepage](images/homepage.png)

---

# 🧬 **Technology Stack**

| Layer                | Tools                   |
| -------------------- | ----------------------- |
| **ML Framework**     | TensorFlow, Keras       |
| **Model Type**       | CNN (binary classifier) |
| **Explainability**   | Grad-CAM                |
| **Frontend**         | React + Vite            |
| **Backend**          | Flask                   |
| **Language**         | Python + JavaScript     |
| **Image Processing** | OpenCV, Pillow          |

---

# 🔧 **System Architecture**

```
                    ┌────────────────────────────┐
                    │         Frontend (React)    │
                    │   - Upload Image            │
                    │   - UI Dashboard            │
                    │   - Visualizations          │
                    └──────────────┬─────────────┘
                                   │
                                   ▼
                      ┌─────────────────────────┐
                      │     Backend (Flask)     │
                      │   - AI Model Inference  │
                      │   - GradCAM Generation  │
                      │   - Vegetation Index    │
                      └─────────────┬───────────┘
                                    │
                                    ▼
                      ┌─────────────────────────┐
                      │     AI Model Storage    │
                      └─────────────────────────┘
```

---

# 📁 **Project Structure**

```
earthsense-ai/
│
├── backend/
│   ├── app.py
│   ├── utils.py
│   ├── requirements.txt
│   ├── model/
│   │   ├── class_indices.json
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
```

---

# 🧪 **How It Works (Flow)**

### **1️⃣ User uploads satellite image**

→ through React frontend

### **2️⃣ Backend preprocesses the image**

→ resize → normalize → model-ready tensor

### **3️⃣ Model performs classification**

→ CNN predicts deforested/non-deforested

### **4️⃣ Grad-CAM highlights regions of interest**

→ shows why prediction happened

### **5️⃣ Vegetation estimator calculates green cover**

→ based on HSV thresholding

### **6️⃣ Result sent back to frontend**

→ label, confidence %, heatmap, vegetation %, metadata

---

# 📊 **Example Output**

| Parameter        | Value                     |
| ---------------- | ------------------------- |
| Prediction       | Deforested                |
| Confidence       | 93.12%                    |
| Vegetation Cover | 14.7%                     |
| Heatmap          | Delivered as Base64 image |
| Inference Time   | ~0.3 sec                  |

---

# 🌟 **Advantages**

* **Fast** → optimized inference
* **Explainable** → transparent AI
* **Portable** → works on satellite, drone, or aerial imagery
* **Modular** → extendable to other disasters
* **Lightweight UI** → easy for judges to test

---

# 🔭 **Future Enhancements**

| Feature                         | Status      |
| ------------------------------- | ----------- |
| 🛰️ Landslide Detection         | coming soon |
| 🌊 Flood Severity Mapping       | coming soon |
| 🔥 Wildfire Burn Area Index     | planned     |
| 🌍 Time-series Change Detection | planned     |
| 📡 SAR Radar-Based Models       | planned     |
| 🗺️ Multi-Disaster AI Dashboard | planned     |

---

# 👥 **Team**

**Project Lead:**
**ANSUJKMEHER**

**Areas:**
AI/ML, Deep Learning, Remote Sensing, Full-Stack Development

---

# 🖼️ **Screenshots (Add Later)**

```md
![Home](images/homepage.png)
```

---

# 🏁 **Closing Note**

**EarthSense AI** demonstrates how AI and satellite imagery can work together to protect the planet.
This system is not just a project—it's the foundation for a scalable environmental intelligence ecosystem.

Let’s use technology to safeguard our forests. 🌱🌍

---

If you want, I can also generate:

🔥 **Presentation PPT content**
🎙️ **Pitch video script for Round 3**
📄 **One-page PDF project summary**

Just say **"make pitch script"** or **"make one-pager"**.
