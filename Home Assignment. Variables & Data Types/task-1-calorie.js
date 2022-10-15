
let caloriesPer30Minutes = 225;

let numTimesCycling = 15;

let numCyclingPerDay = 1;

let min30ToFloat = 0.5;

let totalCycling = numTimesCycling * numCyclingPerDay;

let totalHoursCycling = totalCycling * min30ToFloat;

let totalCaloriesBurned = caloriesPer30Minutes * totalCycling;

console.log(`Great work, Sam! After 0.5 hours of running every day for a week, you may lose a total of ${totalCaloriesBurned} calories.`);