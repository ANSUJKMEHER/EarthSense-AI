// frontend/src/components/BatchUpload.jsx
import React, { useState } from "react";
import { batchPredict } from "../api";
import { saveAs } from "file-saver";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function BatchUpload() {
  const [files, setFiles] = useState([]);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onFiles = (e) => {
    setFiles(Array.from(e.target.files));
    setResult(null);
    setError(null);
  };

  const submit = async () => {
    if (files.length === 0) return setError("Please select images for batch");
    setLoading(true);
    setError(null);
    try {
      const data = await batchPredict(files);
      setResult(data);
    } catch (err) {
      console.error(err);
      setError(err?.response?.data || err.message);
    }
    setLoading(false);
  };

  const downloadCSV = () => {
    if (!result) return;
    const rows = [["filename", "label", "confidence", "prob_deforested", "prob_non_deforested", "veg_fraction"]];
    result.results.forEach((r) => {
      rows.push([
        r.filename || "",
        r.label || "",
        r.confidence ?? "",
        r.prob_deforested ?? "",
        r.prob_non_deforested ?? "",
        r.veg_fraction ?? ""
      ]);
    });
    const csv = rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "batch_results.csv");
  };

  const pieData = result
    ? {
        labels: ["Deforested", "Not Deforested"],
        datasets: [
          {
            data: [result.summary.deforested, result.summary.not_deforested],
            backgroundColor: ["#e74c3c", "#2ecc71"],
            borderColor: ["#c0392b", "#27ae60"],
            borderWidth: 2,
          },
        ],
      }
    : null;

  return (
    <div className="card dark-card">
      <h2>Batch Upload</h2>

      <input type="file" accept="image/*" multiple onChange={onFiles} />

      <div style={{ marginTop: 12 }}>
        <button className="btn" onClick={submit} disabled={loading}>
          {loading ? "Running batch..." : "Run Batch"}
        </button>
        <button
          className="btn alt"
          onClick={() => {
            setFiles([]);
            setResult(null);
            setError(null);
          }}
          style={{ marginLeft: 8 }}
        >
          Reset
        </button>
        {result && (
          <button className="btn ghost" onClick={downloadCSV} style={{ marginLeft: 8 }}>
            Download CSV
          </button>
        )}
      </div>

      {error && <div className="error">{String(error)}</div>}

      {result && (
        <div style={{ marginTop: 14 }}>
          <div className="summaryRow">
            <div className="statCard">
              <div className="statTitle">Total</div>
              <div className="statValue">{result.summary.total}</div>
            </div>
            <div className="statCard">
              <div className="statTitle">Deforested</div>
              <div className="statValue">{result.summary.deforested}</div>
            </div>
            <div className="statCard">
              <div className="statTitle">Not Deforested</div>
              <div className="statValue">{result.summary.not_deforested}</div>
            </div>
            <div className="statCard">
              <div className="statTitle">Accuracy (est)</div>
              <div className="statValue">
                {/* derive approximate ratio of majority label */}
                {Math.round(((Math.max(result.summary.deforested, result.summary.not_deforested) / result.summary.total) || 0) * 100)}%
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            <div style={{ flex: 1 }}>
              <table className="fancyTable">
                <thead>
                  <tr>
                    <th>Filename</th>
                    <th>Label</th>
                    <th>Confidence</th>
                    <th>Vegetation Coverage</th>
                  </tr>
                </thead>
                <tbody>
                  {result.results.map((r, i) => (
                    <tr key={i}>
                      <td>{r.filename}</td>
                      <td>
                        <span style={{
                          color: r.label === "Deforested" ? "#e74c3c" : "#2ecc71",
                          fontWeight: "600"
                        }}>
                          {r.label}
                        </span>
                      </td>
                      <td>{(r.confidence * 100).toFixed(1)}%</td>
                      <td>
                        {r.veg_fraction != null 
                          ? `${(r.veg_fraction * 100).toFixed(1)}%` 
                          : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ width: 260 }}>
              {pieData && <Pie data={pieData} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
