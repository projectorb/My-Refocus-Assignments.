let alreadySavedMoney = 7500;
let savingsGoal = 10000;
let remainingBalance = savingsGoal - alreadySavedMoney
let remainingBalanceInPercentage = (remainingBalance / savingsGoal) * 100;
let formatSavingsGoal = savingsGoal.toLocaleString('en-US');
console.log(`Thank you for your discipline and hardwork, Sam! You are now ${remainingBalanceInPercentage}% away from your goal of saving ₱${formatSavingsGoal}.`)