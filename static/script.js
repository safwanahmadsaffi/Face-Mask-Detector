const webcam = document.getElementById("webcam");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const statusText = document.getElementById("status");

let stream;
let interval;

async function startWebcam() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({ video: true });
    webcam.srcObject = stream;
    startBtn.disabled = true;
    stopBtn.disabled = false;
    statusText.textContent = "🎥 Webcam started";

    interval = setInterval(captureAndSend, 2000); // every 2 seconds
  } catch (err) {
    console.error("Error accessing webcam:", err);
    statusText.textContent = "❌ Webcam access denied";
  }
}

function stopWebcam() {
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
  }
  clearInterval(interval);
  webcam.srcObject = null;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  statusText.textContent = "⏹️ Webcam stopped";
}

async function captureAndSend() {
  const canvas = document.createElement("canvas");
  canvas.width = 224;
  canvas.height = 224;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(webcam, 0, 0, 224, 224);
  const dataUrl = canvas.toDataURL("image/jpeg");

  try {
    const response = await fetch("/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: dataUrl }),
    });
    const result = await response.json();
    statusText.textContent = `Prediction: ${result.label || "Error"}`;
  } catch (err) {
    console.error(err);
    statusText.textContent = "⚠️ Prediction error";
  }
}

startBtn.addEventListener("click", startWebcam);
stopBtn.addEventListener("click", stopWebcam);
