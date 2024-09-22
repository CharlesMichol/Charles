<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Personalized Greeting</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            color: #333;
            text-align: center;
            padding: 50px;
        }

        h1 {
            color: #010c07d0;
        }

        /* Input Field Styling */
        #nameInput {
            padding: 10px;
            font-size: 16px;
            border: 2px solid #4CAF50;
            border-radius: 5px;
            width: 200px;
            margin-bottom: 20px;
        }

        /* Button Styling */
        button {
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            background-color: #4CAF50;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }

        /* Greeting Message Styling */
        #greetingMessage {
            margin-top: 20px;
            font-size: 18px;
            font-weight: bold;
            color: #333;
        }
    </style>
</head>
<body>
    <h1>Welcome to the Greeting Page!</h1>
    <p>Enter your name:</p>
    <input type="text" id="nameInput" placeholder="Your name here">
    <button onclick="greetUser()">Greet Me!</button>
    <p id="greetingMessage"></p>

    <h1>Click the Button to Display an Image</h1>
    <button onclick="showImage()">Show Image</button>
    <br><br>
    <img id="responseImage" src="" alt="Image will appear here" style="display:none; width:1000px;">

    <script>
        function greetUser() {
            // Get the value from the input field
            const name = document.getElementById('nameInput').value;

            // Create a greeting message
            const message = 'Hello, ' + name + '! Welcome to our site.';
            
            // Display the message in the paragraph with id 'greetingMessage'
            document.getElementById('greetingMessage').textContent = message;
        }

        function showImage() {
            // Get the image element by its ID
            const img = document.getElementById('responseImage');
            
            // Set the source of the image to the path of your image file
            img.src = 'MONKEY.jpg'; // Update this path to match your image file's location
            
            // Optionally, make the image visible if it's hidden
            img.style.display = 'block';
        }
    </script>
</body>
</html>

