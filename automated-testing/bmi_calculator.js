function getBMI(heigth, weight)
{
  // heigth meters
  // weight kilograms

  var bmi = weight / (heigth ** 2);

  if (bmi < 18.5)
  {
    console.log('Under Weigth')
    return 'Under Weigth';
  } else if (bmi > 18.5 && bmi < 24.9)
  {
    console.log('Normal')
    return 'Normal';
  } else if (bmi > 25 && bmi < 29.9)
  {
    console.log('Over Weigth');
    return 'Over Weigth';
  } else {
    console.log('Obese');
    return 'Obese';
  }

}

getBMI(1.2, 40)


module.exports = getBMI