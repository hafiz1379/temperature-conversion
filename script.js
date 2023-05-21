function showOutput() {
  const outputElement = document.getElementById("output");
  outputElement.style.animation = "fadeIn 0.5s";
  outputElement.style.opacity = 1;
}

function convertTemperature() {
  const inputTemperature = document.getElementById("inputTemperature").value;
  const inputUnit = document.getElementById("inputUnit").value;
  let output = "";

  if (inputUnit === "C") {
    const fahrenheit = (inputTemperature * 9/5) + 32;
    const kelvin = parseFloat(inputTemperature) + 273.15;
    output = `${inputTemperature}°C = ${fahrenheit.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
  } else if (inputUnit === "F") {
    const celsius = (inputTemperature - 32) * 5/9;
    const kelvin = (inputTemperature - 32) * 5/9 + 273.15;
    output = `${inputTemperature}°F = ${celsius.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
  } else {
    const celsius = inputTemperature - 273.15;
    const fahrenheit = (inputTemperature - 273.15) * 9/5 + 32;
    output = `${inputTemperature}K = ${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
  }

  document.getElementById("output").innerHTML = output;

  // Save the conversion to local storage
  const conversions = JSON.parse(localStorage.getItem("conversions")) || [];
  conversions.push(output);
  localStorage.setItem("conversions", JSON.stringify(conversions));

  // Show the output with animation
  showOutput();
}

function deleteConversion() {
  // Remove the conversion from local storage
  localStorage.removeItem("conversions");

  // Clear the output
  document.getElementById("output").innerHTML = "";
}

// Load the saved conversions from local storage on page load
document.addEventListener("DOMContentLoaded", function() {
  const savedConversions = JSON.parse(localStorage.getItem("conversions")) || [];
  if (savedConversions.length > 0) {
    document.getElementById("output").innerHTML = savedConversions[savedConversions.length - 1];
    showOutput();
  }
});
