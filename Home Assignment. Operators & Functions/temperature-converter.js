

function convertToKelvin(value, type)
{
  if (type == 'celsius')
  {
    // from https://www.cuemath.com/celsius-to-kelvin-formula/
    let tempKelvin = value + 273.15;
    return tempKelvin;
  }

  if (type == 'fahrenheit')
  {
    let tempKelvin = (((value - 32) * 5) / 9) + 273.15;
    return tempKelvin;
  }
}

console.log(convertToKelvin(24, 'celsius'), convertToKelvin(24, 'fahrenheit'))
