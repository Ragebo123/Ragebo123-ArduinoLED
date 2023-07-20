// main.js
const redButton = document.getElementById('redButton');
const greenButton = document.getElementById('greenButton');
const blueButton = document.getElementById('blueButton');
const brightnessSlider = document.getElementById('brightnessSlider');

// Replace the IP_ADDRESS with the IP address of your Arduino (e.g., "192.168.0.100")
const arduinoIPAddress = 'IP_ADDRESS';
const arduinoPort = 80; // Port number (80 is common for HTTP)

// Function to send commands to the Arduino
function sendCommand(color, brightness) {
    const url = `http://${arduinoIPAddress}:${arduinoPort}/set?color=${color}&brightness=${brightness}`;
    fetch(url)
        .then(response => console.log('Command sent successfully!'))
        .catch(error => console.error('Error sending command:', error));
}

// Button click event handlers
redButton.addEventListener('click', () => sendCommand('red', brightnessSlider.value));
greenButton.addEventListener('click', () => sendCommand('green', brightnessSlider.value));
blueButton.addEventListener('click', () => sendCommand('blue', brightnessSlider.value));
brightnessSlider.addEventListener('input', () => sendCommand('brightness', brightnessSlider.value));
