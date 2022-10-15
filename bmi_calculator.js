function getBMI(heigth, weight)
{
  // heigth meters
  // weight kilograms

  var bmi = weight / (heigth ** 2);

  if (bmi < 18.5)
  {
    console.log('Under weigth');
  } else if (bmi > 18.5 && bmi < 24.9)
  {
    console.log('Normal')
  } else if (bmi > 25 && bmi < 29.9)
  {
    console.log('Over weight');
  } else {
    console.log('Obese');
  }
}

getBMI(1.64592, 55)