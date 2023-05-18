import cv2
import os
import base64
import json
import requests
import tempfile
import time
from flask import Flask, request, jsonify

app = Flask(__name__)

def extract_frame(video_path, frame_number, output_path):
    # Open the video file
    video = cv2.VideoCapture(video_path)

    # Set the frame number to extract
    video.set(cv2.CAP_PROP_POS_FRAMES, frame_number-1)

    # Read the frame
    success, frame = video.read()

    if success:
        # Save the frame as an image
        cv2.imwrite(output_path, frame)
        print("Frame extracted successfully.")  
    else:
        print("Error: Could not extract frame.")
        return None

    # Release the video file
    video.release()
    return output_path

@app.route('/text2image', methods=['POST'])
def process_image():
    # Get the payload from the CEP extension
    payload = request.get_json()
    print(payload)
    # Send the payload to the external API
    url = 'http://127.0.0.1:7860/sdapi/v1/txt2img'
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, headers=headers, json=payload)
    response_data = response.json()
    # Parse the 'info' string into a Python dictionary
    info = json.loads(response_data.get('info', '{}'))
    print('Response Data:', response_data)
    # Extract the seed value from the 'info' key
    seed = info.get('seed', None)

    # Save the image to the temp directory
    try:
        image_data = base64.b64decode(response_data['images'][0])
    except KeyError:
        print("Error: 'images' key not found in response_data")
        # You can return an error message or handle the situation as appropriate
        return "Error: 'images' key not found in response_data", 400

    temp_dir = tempfile.gettempdir()

    # Use the seed value in the file name
    image_path = os.path.join(temp_dir, f'image_{seed}.png') if seed is not None else os.path.join(temp_dir, f'image_{int(time.time())}.png')

    with open(image_path, 'wb') as f:
        f.write(image_data)

    # Create a JSON object containing the path to the saved image and the seed value
    response_json = {'imagePath': image_path, 'seed': seed}
    

    # Serialize the JSON object to a string
    response_str = json.dumps(response_json)
    print('Response String:', response_str)
    # Return the JSON string as part of the HTTP response
    return response_str

@app.route('/image2image', methods=['POST'])
def process_image2():
    # Get the payload from the CEP extension
    payload = request.get_json()
    print("Received payload:", payload)

    if 'images' not in payload or 'path' not in payload['images'] or 'frame' not in payload['images']:
        return jsonify({"error": "'images', 'path' or 'frame' key not found in payload"}), 400

    try:
        # Extract the frame path and the frame number from the payload
        frame_path = payload['images']['path']
        frame_num = payload['images']['frame']
        print(frame_path, frame_num)

        # Extract frame and save it as image
        temp_frame_path =  os.path.join(tempfile.gettempdir(), f'frame_{frame_num}.png')
        output_path = extract_frame(frame_path, frame_num, temp_frame_path)
        if not output_path:
            return jsonify({"error": "Could not extract frame"}), 400

        # Update the payload to have the b64 image instead of the path
        with open(temp_frame_path, 'rb') as image_file:
            encoded_image = base64.b64encode(image_file.read()).decode('utf-8')
            payload['init_images'] = [encoded_image]
        del payload['images']
    except Exception as e:
        print(f"Error encoding image: {e}")
        return jsonify({"error": str(e)}), 400
    
     # Send the payload to the external API
    url = 'http://127.0.0.1:7860/sdapi/v1/img2img'
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, headers=headers, json=payload)
    print(payload)
    response_data = response.json()

    # Parse the 'info' string into a Python dictionary
    info = json.loads(response_data.get('info', '{}'))

    # Extract the seed value from the 'info' key
    seed = info.get('seed', None)

    # Save the image to the temp directory
    try:
        image_data = base64.b64decode(response_data['images'][0])
    except KeyError:
        print("Error: 'images' key not found in response_data")
        # You can return an error message or handle the situation as appropriate
        return "Error: 'images' key not found in response_data", 400

    temp_dir = tempfile.gettempdir()

    # Use the seed value in the file name
    image_path = os.path.join(temp_dir, f'image_{seed}_{frame_num}.png') if seed is not None else os.path.join(temp_dir, f'image_{int(time.time())}.png')

    with open(image_path, 'wb') as f:
        f.write(image_data)

    # Create a JSON object containing the path to the saved image and the seed value
    response_json = {'imagePath': image_path, 'seed': seed}

    # Serialize the JSON object to a string
    response_str = json.dumps(response_json)
    print(response_str)
    # Return the JSON string as part of the HTTP response
    return response_str
    
@app.route('/image2imageMask', methods=['POST'])
def process_image_mask():
    # Get the payload from the CEP extension
    payload = request.get_json()
    print("Received payload:", payload)

    if 'images' not in payload or 'path' not in payload['images'] or 'frame' not in payload['images']:
        return jsonify({"error": "'images', 'path' or 'frame' key not found in payload"}), 400

    try:
        # Extract the frame path and the frame number from the payload
        frame_path = payload['images']['path']
        frame_num = payload['images']['frame']
        print(frame_path, frame_num)

        # Extract frame and save it as image
        temp_frame_path =  os.path.join(tempfile.gettempdir(), f'frame_{frame_num}.png')
        output_path = extract_frame(frame_path, frame_num, temp_frame_path)
        if not output_path:
            return jsonify({"error": "Could not extract frame"}), 400

        # Update the payload to have the b64 image instead of the path
        with open(temp_frame_path, 'rb') as image_file:
            encoded_image = base64.b64encode(image_file.read()).decode('utf-8')
            payload['init_images'] = [encoded_image]
        
        # Check if Masks key is present in the payload
        if 'Masks' in payload and 'path' in payload['Masks'] and 'frame' in payload['Masks']:
            mask_path = payload['Masks']['path']
            mask_num = payload['Masks']['frame']
            
         # Extract frame and save it as image
        temp_frame_path2 =  os.path.join(tempfile.gettempdir(), f'mask_{mask_num}.png')
        output_path2 = extract_frame(mask_path, mask_num, temp_frame_path2)
        print("Mask image output path:", output_path2)
        if not output_path2:
            return jsonify({"error": "Could not extract frame"}), 400

        # Update the payload to have the b64 image instead of the path
        with open(temp_frame_path2, 'rb') as image_file:
            encoded_image2 = base64.b64encode(image_file.read()).decode('utf-8')
            print("Start of encoded mask image:", encoded_image2[:50])

            payload['mask'] = encoded_image2

        del payload['images']
        if 'Masks' in payload:
            del payload['Masks']
    except Exception as e:
        print(f"Error encoding image: {e}")
        return jsonify({"error": str(e)}), 400

    print("Sending payload:", payload)

    # Send the payload to the external API
    url = 'http://127.0.0.1:7860/sdapi/v1/img2img'
    headers = {'Content-Type': 'application/json'}
    response = requests.post(url, headers=headers, json=payload)
    print(payload)
    response_data = response.json()
    print(response_data)
    # Parse the 'info' string into a Python dictionary
    info = json.loads(response_data.get('info', '{}'))

    # Extract the seed value from the 'info' key
    seed = info.get('seed', None)

    # Save the image to the temp directory
    try:
        image_data = base64.b64decode(response_data['images'][0])
    except KeyError:
        print("Error: 'images' key not found in response_data")
        # You can return an error message or handle the situation as appropriate
        return "Error: 'images' key not found in response_data", 400

    temp_dir = tempfile.gettempdir()

    # Use the seed value in the file name
    image_path = os.path.join(temp_dir, f'image_{seed}_{frame_num}.png') if seed is not None else os.path.join(temp_dir, f'image_{int(time.time())}.png')

    with open(image_path, 'wb') as f:
        f.write(image_data)

    # Create a JSON object containing the path to the saved image and the seed value
    response_json = {'imagePath': image_path, 'seed': seed}

    # Serialize the JSON object to a string
    response_str = json.dumps(response_json)
    print(response_str)
    # Return the JSON string as part of the HTTP response
    return response_str


if __name__ == '__main__':
    app.run(port=8000)
