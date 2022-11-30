const bmi_calculator = require('./bmi_calculator');

test('if bmi is Normal', () => {
  expect(bmi_calculator(1.6, 55)).toBe('Normal');
})

test('if bmi is Obese', () => {
  expect(bmi_calculator(1, 55)).toBe('Obese');
})

test('if bmi is Under Weigth', () => {
  expect(bmi_calculator(5.4, 30)).toBe('Under Weigth');
})

test('if bmi is Over Weigth', () => {
  expect(bmi_calculator(1.2, 40)).toBe('Over Weigth');
})