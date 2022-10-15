function getOximeterReading(percentage)
{
  if (percentage <= 92)
  {
    return 'Seek urgent Medical advice';
  } else if (percentage >= 93 && percentage <= 94) {
    return 'Seek advice from health professionals';
  } else if (percentage == 95){
    return 'Acceptable to continue home monitoring';
  } else if (percentage >= 96){
    return 'Normal Reading';
  }
}

console.log(getOximeterReading(92))
console.log(getOximeterReading(94))
console.log(getOximeterReading(95))
console.log(getOximeterReading(96))
