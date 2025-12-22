from flask import Flask, render_template, request, jsonify
from tensorflow.keras.models import load_model
import numpy as np
import cv2
import base64

app = Flask(__name__)

# Load model
model = load_model("vgg16_mask.keras")
classes = ["Mask", "No Mask"]

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get base64 image from frontend
        data = request.json["image"]
        img_data = base64.b64decode(data.split(",")[1])
        nparr = np.frombuffer(img_data, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)

        # Preprocess image
        img = cv2.resize(img, (224, 224))
        img = img / 255.0
        img = np.expand_dims(img, axis=0)

        # Predict
        pred = model.predict(img)
        label = classes[int(pred[0][0] > 0.5)]

        return jsonify({"label": label})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == "__main__":
    from flask import Flask
    import os
    port = int(os.environ.get("PORT", 7860))
    app.run(host="0.0.0.0", port=port)

