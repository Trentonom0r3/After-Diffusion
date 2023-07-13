
import random
import string
from flask import Flask, request, jsonify
import os
import base64
import json
import requests
import tempfile
import time
from PIL import Image
import numpy as np
from io import BytesIO

app = Flask(__name__)
sd_url = 'http://127.0.0.1:7860'

@app.route('/change_url', methods=['POST'])
def change_sd_url():
    # Get the new sd_url from the request payload
    payload = request.get_json()
    print('Payload:', payload)
    new_sd_url = payload.get('sd_url', None)
    print('New sd_url:', new_sd_url)

    if new_sd_url is None:
        return "Error: 'sd_url' not found in the request payload", 400

    # Update the global sd_url variable with the new value
    global sd_url
    sd_url = new_sd_url
    print(f"sd_url changed to {sd_url}")
    return "sd_url changed successfully"


@app.route('/text2image', methods=['POST'])
def process_image():
    # Get the payload from the CEP extension
    payload = request.get_json()
    # Send the payload to the external API
    url = f'{sd_url}/sdapi/v1/txt2img'
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
    # Extract the frame path from the payload
    frame_path = payload['images']['path']

    # Update the payload to have the b64 image instead of the path
    with open(frame_path, 'rb') as image_file:
        encoded_image = base64.b64encode(image_file.read()).decode('utf-8')
    payload['init_images'] = [encoded_image]

    # Check if 'mask' is in the payload
    if 'mask' in payload:
        # Extract the mask path from the payload
        mask_path = payload['mask']['path']

        # Update the payload to have the b64 mask instead of the path
        with open(mask_path, 'rb') as mask_file:
            encoded_mask = base64.b64encode(mask_file.read()).decode('utf-8')
        payload['mask'] = encoded_mask

    # Send the payload to the external API
    url = f'{sd_url}/sdapi/v1/img2img'
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
   # Generate a random suffix for uniqueness
    suffix = ''.join(random.choices(string.ascii_lowercase + string.digits, k=6))

# Use the seed value in the file name
    image_path = os.path.join(temp_dir, f'image_{suffix}_{seed}.png') if seed is not None else os.path.join(temp_dir, f'image_{int(time.time())}_{suffix}.png')
    with open(image_path, 'wb') as f:
        f.write(image_data)

    # Create a JSON object containing the path to the saved image and the seed value
    response_json = {'imagePath': image_path, 'seed': seed}
    

    # Serialize the JSON object to a string
    response_str = json.dumps(response_json)
    print('Response String:', response_str)
    # Return the JSON string as part of the HTTP response
    return response_str


@app.route("/swapModel", methods=["POST"])
def swapModel():
    payload = request.get_json()
    url = f'{sd_url}/sdapi/v1/options'
    response = requests.post(url, json=payload)
    return jsonify(response.json())

@app.route("/get_sd_models", methods=["POST"])
def get_sd_models():
    url = f'{sd_url}/sdapi/v1/sd-models'
    print(url)
    response = requests.get(url)
    print(response.json())
    return jsonify(response.json())

@app.route("/controlnet/model_list", methods=["POST"])
def controlnet_model():
    url = f'{sd_url}/controlnet/model_list'
    response = requests.get(url)
    return jsonify(response.json())

@app.route("/controlnet/module_list", methods=["POST"])
def controlnet_module():
    url = f'{sd_url}/controlnet/module_list'
    response = requests.get(url)
    return jsonify(response.json())

@app.route('/create_grid', methods=['POST'])
def create_grid():
    # Get the payload from the request
    payload = request.get_json()
    print(payload)
    # Get images from payload
    images_data = payload.get('images', None)

    if images_data is None:
        return jsonify({"error": "Missing 'images' key in the request payload"}), 400

    # Get dimensions
    tile_height = payload['tilegHeight']
    tile_width = payload['tilegWidth']
    grid_height = payload['maxgHeight']
    grid_width = payload['maxgWidth']

    # Create a blank canvas for the grid
    grid_image = Image.new('RGBA', (grid_width, grid_height))

    # Process images
    for img in images_data:
        # Decode base64 image
        image_data = img['url'].split(",")[1]
        img_decoded = Image.open(BytesIO(base64.b64decode(image_data)))

        # Calculate the aspect ratio
        aspect_ratio = img_decoded.width / img_decoded.height
        new_height = tile_height
        new_width = tile_width

        # Adjust width or height based on the original image's aspect ratio
        if aspect_ratio > 1:
            # Image is wide
            new_height = tile_width // aspect_ratio
        elif aspect_ratio < 1:
            # Image is tall
            new_width = tile_height * aspect_ratio

        # Resize the image while maintaining the aspect ratio
        img_resized = img_decoded.resize((int(new_width), int(new_height)))

        # Get position
        pos = img['position']

        # Calculate paste position so the image is centered within its tile
        paste_x = pos['x']*tile_width + (tile_width - new_width) // 2
        paste_y = pos['y']*tile_height + (tile_height - new_height) // 2

        # Paste image into the grid at the correct position
        grid_image.paste(img_resized, (int(paste_x), int(paste_y)))

    # Save the grid image to a temporary file
    with tempfile.NamedTemporaryFile(dir='/tmp', delete=False, suffix='.png') as f:
        grid_image.save(f.name, 'PNG')
        temp_file_name = f.name

    return jsonify({'message': 'Grid created successfully', 'file_path': temp_file_name})

if __name__ == '__main__':
    app.run(port=8000)
