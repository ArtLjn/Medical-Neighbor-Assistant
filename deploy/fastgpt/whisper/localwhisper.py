from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/v1/audio/transcriptions', methods=['POST'])
def transcriptions():
    if 'file' not in request.files:
        return jsonify({"error": "No audio file provided"}), 400

    audio_file = request.files['file']
    url = 'http://localhost:9000/asr?encode=true&task=transcribe&language=zh&word_timestamps=false&output=txt'
    
    files = {'audio_file': (audio_file.filename, audio_file, 'audio/mpeg')}
    response = requests.post(url, files=files)
    
    return jsonify({"text": response.text})

if __name__ == '__main__':
    app.run(debug=True,port=5005,host="0.0.0.0")

