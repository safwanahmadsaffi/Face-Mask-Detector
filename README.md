---
title: Mask And No Mask
emoji: 😷
colorFrom: pink
colorTo: pink
sdk: gradio
app_file: app.py
pinned: false
license: mit
---

A web application for detecting whether a person is wearing a face mask using a webcam or uploaded image. This project is designed to help promote safety by providing real-time mask detection.

## How It Works
1. The user opens the web application in their browser.
2. The app provides two options: use the webcam for live detection or upload an image.
3. When the webcam is enabled, the app captures video frames and sends them to the backend for analysis.
4. The backend processes each frame or uploaded image using a machine learning model to detect faces and determine if a mask is present.
5. The result (Mask/No Mask) is displayed on the web page with visual feedback (such as colored boxes or labels).

This workflow allows for both real-time and static image detection, making the app flexible for different use cases.

## Features
- Real-time face mask detection via webcam
- Option to upload images for mask detection
- Simple and intuitive web interface
- Visual feedback for mask/no mask

## Project Structure
```
Face_Mask_Detector/
├── app.py               # Main application file (Flask app)
├── static/              # Static files (JS, CSS)
│   ├── script.js        # Frontend JavaScript
│   └── style.css        # Stylesheet
├── templates/           # HTML templates
│   └── index.html       # Main web page
├── env/                 # Python virtual environment
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites
- Python 3.7+
- pip (Python package manager)

### Setup
1. **Clone the repository**
	```bash
	git clone <repo-url>
	cd Face_Mask_Detector
	```
2. **Create and activate a virtual environment**
	```bash
	python -m venv env
	# On Windows:
	env\Scripts\activate
	# On macOS/Linux:
	source env/bin/activate
	```
3. **Install dependencies**
	```bash
	pip install -r requirements.txt
	```
	*(If `requirements.txt` is missing, manually install Flask and any other required packages.)*

### Running the Application
```bash
python app.py
```
The app will be available at [http://127.0.0.1:5000](http://127.0.0.1:5000).

## Usage
1. Start the application by running `python app.py`.
2. Open your browser and go to [http://127.0.0.1:5000](http://127.0.0.1:5000).
3. On the main page, you can:
	- Click the button to enable your webcam and allow access when prompted. The app will automatically start detecting masks in real time.
	- Or, use the upload option to select an image from your device. The app will analyze the image and display the result.
4. The detection result (Mask/No Mask) will be shown on the screen, often with a colored box or label around the detected face(s).

**Note:** Make sure your webcam is connected and accessible if you want to use the real-time detection feature.

## Folder Details
- **app.py**: Main Flask application.
- **static/**: Contains JavaScript and CSS for the frontend.
- **templates/**: HTML templates for rendering web pages.
- **env/**: Python virtual environment (do not edit).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

## Acknowledgements
- Flask web framework
- OpenCV, TensorFlow, or other ML libraries (if used)
- Any datasets or pre-trained models (if used)

---
*For questions or support, please open an issue in the repository.*
