function getBMI(heigth, weight)
{
  // heigth meters
  // weight kilograms

  var bmi = weight / (heigth ** 2);

  if (bmi < 18.5)
  {
    return 'Under Weigth';
  } else if (bmi > 18.5 && bmi < 24.9)
  {
    return 'Normal';
  } else if (bmi > 25 && bmi < 29.9)
  {
    return 'Over Weigth';
  } else {
    return 'Obese';
  }

}

function testBMI()
{
  var result = getBMI(1.6, 55);
  var expected = 'Normal';

  console.assert(result === expected, 'Test Failed result should be Normal');
  
  result = getBMI(1, 55);
  expected = 'Obese';

  console.assert(result === expected, 'Test Failed result should be Obese');

  result = getBMI(5.4, 30);
  expected = 'Under Weigth';

  console.assert(result === expected, 'Test Failed result should be Under Weigth');

  result = getBMI(1.2, 40);
  expected = 'Over Weigth';

  console.assert(result === expected, 'Test Failed result should be Over Weigth');
  
}

testBMI();