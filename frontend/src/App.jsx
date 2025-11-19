// frontend/src/App.jsx
import React, { useEffect, useState } from "react";
import UploadCard from "./components/UploadCard";
import BatchUpload from "./components/BatchUpload";
import "./App.css";

export default function App() {
  const [backendStatus, setBackendStatus] = useState("Checking...");
  const API_URL = import.meta.env.VITE_API_BASE || "http://localhost:5000";

  useEffect(() => {
    async function checkBackend() {
      try {
        const res = await fetch(`${API_URL}/ping`);
        const json = await res.json();
        if (json.status === "ok") setBackendStatus("Online");
        else setBackendStatus("Offline");
      } catch (err) {
        setBackendStatus("Offline");
      }
    }
    checkBackend();
  }, []);

  return (
    <div style={styles.pageWrapper} className="app-wrapper">
      <div style={styles.page} className="app-container">
        {/* Header */}
        <header style={styles.header} className="app-header">
          <div>
            <h1 style={styles.title}>EarthSense AI 🌲</h1>
            <p style={styles.subtitle}>Satellite-based Deforestation Detection</p>
          </div>

          <div style={styles.backendBox} className="backend-status">
            <strong>Backend:</strong>{" "}
            <span
              style={{
                color: backendStatus === "Online" ? "#2ecc71" : "#d64545",
                fontWeight: "bold",
                textShadow: backendStatus === "Online" ? "0 0 10px rgba(46, 204, 113, 0.5)" : "none",
              }}
            >
              {backendStatus}
            </span>
            <p style={styles.backendUrl}>{API_URL}</p>
          </div>
        </header>

        {/* Main Layout */}
        <main style={styles.main} className="app-main">
          <div style={styles.leftColumn} className="app-left-column">
            <UploadCard />
            <div style={{ height: 20 }}></div>
            <BatchUpload />
          </div>

          <div style={styles.rightColumn} className="app-right-column">
            {/* Info card */}
            <div style={styles.card}>
              <h3 style={{ marginTop: 0, color: "#fff", fontSize: "18px" }}>About EarthSense AI</h3>
              <p style={{ color: "var(--muted)", lineHeight: "1.6", fontSize: "14px" }}>
                This tool uses a trained MobileNetV2 deep learning model to detect
                whether a satellite image shows <strong style={{ color: "#fff" }}>deforestation</strong> or
                <strong style={{ color: "#fff" }}> healthy forest cover</strong>.
              </p>
              <ul style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.8" }}>
                <li>Single image prediction with Grad-CAM visualization</li>
                <li>Batch prediction with CSV output</li>
                <li>Vegetation coverage analysis</li>
                <li>Model accuracy: ~95%</li>
              </ul>
            </div>

            {/* Demo Steps */}
            <div style={styles.card}>
              <h3 style={{ marginTop: 0, color: "#fff", fontSize: "18px" }}>How to Use</h3>
              <ol style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.8", paddingLeft: "20px" }}>
                <li>Upload a satellite image in JPG/PNG format</li>
                <li>Click "Detect" to analyze</li>
                <li>View prediction, vegetation metrics, and Grad-CAM heatmap</li>
                <li>Try batch upload to analyze multiple images at once</li>
              </ol>
            </div>

            {/* Sample Images */}
            <div style={styles.card}>
              <h3 style={{ marginTop: 0, color: "#fff", fontSize: "18px" }}>Planned Modules</h3>
              <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.6" }}>
                <strong style={{ color: "#fff" }}>Phase 1:</strong> Deforestation Detection (Current)
              </p>
              <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: "1.6", marginTop: "8px" }}>
                <strong style={{ color: "#fff" }}>Phase 2:</strong> Flood Detection, Wildfire Detection, Landslide Detection
              </p>
            </div>
          </div>
        </main>

        <footer style={styles.footer}>
          <div style={{ color: "var(--muted)", fontSize: "13px" }}>
            EarthSense AI • Built with React + Flask + TensorFlow
          </div>
          <div style={{ color: "var(--muted)", fontSize: "11px", marginTop: "4px", opacity: 0.7 }}>
            Satellite-based Environmental Monitoring System
          </div>
        </footer>
      </div>
    </div>
  );
}

// Inline styles
const styles = {
  pageWrapper: {
    position: "relative",
    zIndex: 1,
    minHeight: "100vh",
    padding: "40px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  page: {
    maxWidth: "1400px",
    width: "100%",
    margin: "0 auto",
    fontFamily: "Inter, sans-serif",
    position: "relative",
    zIndex: 1,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
    flexWrap: "wrap",
    gap: "20px",
  },

  title: { 
    margin: 0, 
    fontSize: "36px", 
    fontWeight: "700", 
    background: "linear-gradient(135deg, #4a90e2 0%, #2ecc71 50%, #f1c40f 100%)", 
    WebkitBackgroundClip: "text", 
    WebkitTextFillColor: "transparent", 
    backgroundClip: "text",
    textShadow: "0 0 30px rgba(74, 144, 226, 0.4)",
    filter: "drop-shadow(0 0 10px rgba(74, 144, 226, 0.3))",
  },
  subtitle: { 
    margin: "8px 0 0 0", 
    color: "#9aa0a6", 
    fontSize: "15px",
    fontWeight: "400",
  },

  backendBox: { 
    textAlign: "right",
    background: "rgba(30, 30, 30, 0.7)",
    backdropFilter: "blur(10px)",
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  },
  backendUrl: { fontSize: "11px", color: "var(--muted)", marginTop: "4px", opacity: 0.8 },

  main: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(320px, 400px)",
    gap: "30px",
    alignItems: "start",
  },

  leftColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    position: "sticky",
    top: "20px",
    maxHeight: "calc(100vh - 40px)",
    overflowY: "auto",
  },

  card: {
    background: "rgba(30, 30, 30, 0.75)",
    backdropFilter: "blur(10px)",
    padding: "24px",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
    transition: "all 0.3s ease",
  },

  sampleGrid: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "10px",
  },

  thumb: {
    width: "110px",
    height: "80px",
    borderRadius: "8px",
    objectFit: "cover",
    border: "1px solid #ddd",
  },

  footer: {
    marginTop: "60px",
    paddingTop: "30px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    textAlign: "center",
  },
};
