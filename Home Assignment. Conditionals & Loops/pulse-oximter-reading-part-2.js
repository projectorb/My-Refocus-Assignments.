function getOximeterReading(pulseRate)
{
  if (pulseRate >= 40 && pulseRate <= 100){
    return 'Normal reading';
  } else if (pulseRate >= 101 && pulseRate <= 109) {
    return 'Acceptable to continue home monitoring';
  } else if (pulseRate >= 110 && pulseRate <= 130){
    return 'Seek advice from health professional';
  } else if (pulseRate >= 131){
    return 'Seek urgent medical advice';
  }
}
console.log(getOximeterReading(40))
console.log(getOximeterReading(101))
console.log(getOximeterReading(110))
console.log(getOximeterReading(131))

