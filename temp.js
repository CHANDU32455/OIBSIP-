function convertTemperature() {
  var temperatureValue = parseFloat(document.getElementById('temperature').value);
  var sourceUnit = document.getElementById('sourceUnit').value;
  var targetUnit = document.getElementById('targetUnit').value;

  if (isNaN(temperatureValue)) {
    document.getElementById('result').innerText = 'Please enter a valid number for temperature.';
    return;
  }

  var result = convert(temperatureValue, sourceUnit, targetUnit);
  document.getElementById('result').innerText = temperatureValue + ' ' + sourceUnit + ' is ' + result.toFixed(2) + ' ' + targetUnit;
}

function convert(value, fromUnit, toUnit) {
  if (fromUnit === toUnit) {
    return value;
  }

  switch (fromUnit) {
    case 'celsius':
      return convertCelsius(value, toUnit);
    case 'fahrenheit':
      return convertFahrenheit(value, toUnit);
    case 'kelvin':
      return convertKelvin(value, toUnit);
    case 'rankine':
      return convertRankine(value, toUnit);
    case 'reaumur':
      return convertReaumur(value, toUnit);
    default:
      return NaN;
  }
}

function convertCelsius(value, toUnit) {
  switch (toUnit) {
    case 'fahrenheit':
      return (value * 9/5) + 32;
    case 'kelvin':
      return value + 273.15;
    case 'rankine':
      return (value + 273.15) * 9/5;
    case 'reaumur':
      return value * 4/5;
    default:
      return NaN;
  }
}

function convertFahrenheit(value, toUnit) {
  switch (toUnit) {
    case 'celsius':
      return (value - 32) * 5/9;
    case 'kelvin':
      return (value - 32) * 5/9 + 273.15;
    case 'rankine':
      return value + 459.67;
    case 'reaumur':
      return (value - 32) * 4/9;
    default:
      return NaN;
  }
}

function convertKelvin(value, toUnit) {
  switch (toUnit) {
    case 'celsius':
      return value - 273.15;
    case 'fahrenheit':
      return (value - 273.15) * 9/5 + 32;
    case 'rankine':
      return value * 9/5;
    case 'reaumur':
      return (value - 273.15) * 4/5;
    default:
      return NaN;
  }
}

function convertRankine(value, toUnit) {
  switch (toUnit) {
    case 'celsius':
      return (value - 491.67) * 5/9;
    case 'fahrenheit':
      return value - 459.67;
    case 'kelvin':
      return value * 5/9;
    case 'reaumur':
      return (value - 491.67) * 4/9;
    default:
      return NaN;
  }
}

function convertReaumur(value, toUnit) {
  switch (toUnit) {
    case 'celsius':
      return value * 5/4;
    case 'fahrenheit':
      return value * 9/4 + 32;
    case 'kelvin':
      return value * 5/4 + 273.15;
    case 'rankine':
      return value * 9/4 + 491.67;
    default:
      return NaN;
  }
}
