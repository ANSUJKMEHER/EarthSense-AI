// frontend/src/components/UploadCard.jsx
import React, { useState, useRef } from "react";
import { predictImage } from "../api";
import { saveAs } from "file-saver";

export default function UploadCard() {
  const [file, setFile] = useState(null);
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showHeat, setShowHeat] = useState(true);
  const [error, setError] = useState(null);
  const [imageSize, setImageSize] = useState(null);
  const fileInputRef = useRef();

  const onFile = (e) => {
    const selectedFile = e.target.files[0] ?? null;
    setFile(selectedFile);
    setRes(null);
    setError(null);
    
    // Get image dimensions
    if (selectedFile) {
      const img = new Image();
      img.onload = () => {
        setImageSize({ width: img.width, height: img.height });
      };
      img.src = URL.createObjectURL(selectedFile);
    } else {
      setImageSize(null);
    }
  };

  const submit = async () => {
    if (!file) return setError("Please choose an image (satellite/top-down preferred).");
    setLoading(true);
    setRes(null);
    setError(null);
    try {
      const data = await predictImage(file);
      setRes(data);
    } catch (err) {
      console.error(err);
      setError(err?.response?.data || err.message || "Prediction failed");
    }
    setLoading(false);
  };

  const downloadGradcam = () => {
    if (!res?.gradcam_base64) return;
    const content = atob(res.gradcam_base64);
    const byteNumbers = new Array(content.length);
    for (let i = 0; i < content.length; i++) byteNumbers[i] = content.charCodeAt(i);
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "image/jpeg" });
    saveAs(blob, "gradcam.jpg");
  };

  return (
    <div className="card dark-card">
      <h2>Single Image</h2>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={onFile}
        style={{ marginTop: 8 }}
      />

      {imageSize && !res && (
        <div style={{ marginTop: 12, padding: "10px", background: "rgba(255,255,255,0.03)", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="smallLabel">Image Size</div>
          <div style={{ color: "var(--muted)", fontSize: "13px", marginTop: "4px" }}>
            {imageSize.width} × {imageSize.height} pixels
          </div>
        </div>
      )}

      <div style={{ marginTop: 12 }}>
        <button className="btn" onClick={submit} disabled={loading}>
          {loading ? "Processing..." : "Detect"}
        </button>
          <button
          className="btn alt"
          onClick={() => {
            setFile(null);
            setRes(null);
            setError(null);
            setImageSize(null);
            fileInputRef.current.value = null;
          }}
          style={{ marginLeft: 8 }}
        >
          Reset
        </button>
      </div>

      {error && <div className="error">{String(error)}</div>}

      {res && (
        <div className="resultBlock">
          <div className="resultRow">
            <div>
              <div className="resultLabel">Prediction</div>
              <div className="predictionText">
                <strong>{res.label}</strong>
                <span className="muted"> ({(res.confidence ?? 0) + "%"})</span>
              </div>

              <div className="metricsContainer">
                <div className="metricCard">
                  <div className="metricLabel">Vegetation Coverage</div>
                  <div className="metricValue">
                    {res.veg_fraction != null 
                      ? `${(res.veg_fraction * 100).toFixed(1)}%` 
                      : "—"}
                  </div>
                  <div className="metricSubtext">Heuristic pixel fraction</div>
                </div>
                
                <div className="metricCard">
                  <div className="metricLabel">Average Green Intensity</div>
                  <div className="metricValue">
                    {res.veg_norm != null 
                      ? res.veg_norm.toFixed(3) 
                      : "—"}
                  </div>
                  <div className="metricSubtext">Normalized intensity</div>
                </div>
              </div>

              {imageSize && (
                <div style={{ marginTop: 12, padding: "8px 0", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="smallLabel">Image Size</div>
                  <div style={{ color: "var(--muted)", fontSize: "13px" }}>
                    {imageSize.width} × {imageSize.height} pixels
                  </div>
                </div>
              )}

              <div style={{ marginTop: 12 }}>
                <div className="smallLabel">Confidence</div>
                <div className="progress">
                  <div
                    className="progressBar"
                    style={{ width: `${Math.round(res.confidence)}%` }}
                  />
                </div>
              </div>

              <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                {res.gradcam_base64 && (
                  <>
                    <button
                      className="btn"
                      onClick={() => {
                        setShowHeat((s) => !s);
                      }}
                    >
                      {showHeat ? "Hide Heatmap" : "Show Heatmap"}
                    </button>
                    <button className="btn alt" onClick={downloadGradcam}>
                      Download Grad-CAM
                    </button>
                  </>
                )}
                <button
                  className="btn ghost"
                  onClick={() => {
                    // copy short result to clipboard
                    const vegCoverage = res.veg_fraction != null ? `${(res.veg_fraction * 100).toFixed(1)}%` : "—";
                    const txt = `Prediction: ${res.label} (${res.confidence}%) — Vegetation Coverage: ${vegCoverage}`;
                    navigator.clipboard.writeText(txt);
                    alert("Copied summary to clipboard");
                  }}
                >
                  Copy Summary
                </button>
              </div>
            </div>

            <div style={{ width: 380, textAlign: "center" }}>
              {/* show uploaded image on left, gradcam/overlay right */}
              <div className="imageBox">
                {file ? (
                  <img
                    src={URL.createObjectURL(file)}
                    alt="uploaded"
                    className="previewImg"
                  />
                ) : (
                  <div className="emptyBox">No image selected</div>
                )}
              </div>

              {res.gradcam_base64 && (
                <div style={{ marginTop: 12 }}>
                  <div className="imageBox">
                    {showHeat ? (
                      <img
                        src={`data:image/jpeg;base64,${res.gradcam_base64}`}
                        alt="gradcam"
                        className="previewImg"
                      />
                    ) : (
                      <div className="emptyBox">Heatmap hidden</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="metaRow">
            <div>Model: MobileNetV2 (transfer)</div>
            <div>Timestamp: {new Date().toLocaleString()}</div>
          </div>
        </div>
      )}
    </div>
  );
}
