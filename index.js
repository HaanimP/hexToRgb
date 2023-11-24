// index.js
document.addEventListener('DOMContentLoaded', function () {
    // Get the button element
    let convertButton = document.getElementById("convertButton");

    // Add event listener to the button
    convertButton.addEventListener("click", function() {
        convertHexToRgb();
    });

    // Function to convert Hex to RGB
    function convertHexToRgb() {
        // Get input value
        const hexInput = document.getElementById('hexInput').value;

        // Check if the input is in a valid format
        const hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
        const match = hexInput.match(hexRegex);

        if (!match) {
            alert('Please enter a valid Hex color (e.g., #FF0000).');
            return;
        }

        // Convert Hex to RGB
        const rgbValue = hexToRgb(match[1], match[2], match[3]);

        // Display the result
        const resultElement = document.getElementById('result');
        resultElement.textContent = `RGB color: ${rgbValue.join(', ')}`;
    }

    // Function to convert Hex to RGB
    function hexToRgb(r, g, b) {
        // Convert hexadecimal to decimal
        const toDecimal = (hex) => parseInt(hex, 16);
        const decimalR = toDecimal(r);
        const decimalG = toDecimal(g);
        const decimalB = toDecimal(b);
        return [decimalR, decimalG, decimalB];
    }
});
