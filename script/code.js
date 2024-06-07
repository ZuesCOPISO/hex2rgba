function convertToHex() {
    const redInput = document.getElementById("red-input");
    const greenInput = document.getElementById("green-input");
    const blueInput = document.getElementById("blue-input");

    const red = parseInt(redInput.value);
    const green = parseInt(greenInput.value);
    const blue = parseInt(blueInput.value);

    if (isNaN(red) || isNaN(green) || isNaN(blue) || red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
      document.getElementById("hex-code").textContent = "Please enter valid RGB values (0-255).";
      document.getElementById("color-preview").style.backgroundColor = "transparent";
      return;
    }

    const hexRed = red.toString(16).padStart(2, "0");
    const hexGreen = green.toString(16).padStart(2, "0");
    const hexBlue = blue.toString(16).padStart(2, "0");
    const hexCode = `#${hexRed}${hexGreen}${hexBlue}`;

    document.getElementById("hex-code").textContent = `Hex code: ${hexCode}`;
    document.getElementById("color-preview").style.backgroundColor = hexCode;
  }