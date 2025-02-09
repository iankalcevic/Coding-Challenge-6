//Task 1 - Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return profit;
}; //Calculate profit points

calculateProfit(20, 30, 100); //Expected profit value 1000
calculateProfit(50, 70, 200); //Expected profit value 4000

console.log("Total Profit: $", calculateProfit(20, 30, 100)); //Log results
console.log("Total Profit: $", calculateProfit(50, 70, 200)); //Log results 

//Task 2 - Function Expression
let calculateSalesTax = function(amount, taxRate) {
    let salesTax =Math.floor(amount * taxRate);
    return salesTax;
}; //Calculate sales tax

console.log("Sales Tax: $", calculateSalesTax(100, 0.07)); //100 dollars sales with 7% tax
console.log("Sales Tax: $", calculateSalesTax(500, 0.1)); //500 dollars sales with 10% tax

//Task 3 - Arrow Function
let calculateBonus = (salary, performanceRating) => {
    let bonus;
    if (performanceRating === "Excellent") {
        bonus = salary * 0.20; //20% Bonus
    } else if (performanceRating === "Good") {
        bonus = salary * 0.10; //10% Bonus
    } else if (performanceRating === "Average") {
        bonus = salary * 0.05; //5% Bonus
    }
    return bonus;
};

console.log("Bonus 1: $", calculateBonus (5000, "Excellent")) //Logging bonus output
console.log("Bonus 2: $", calculateBonus (7000, "Good")); //Logging bonus

//Task 4 - Parametrs and Arguments
let calculateSubscriptionCost = function(plan, months, discount=0) {
    let monthlyCost;
    if (plan === "Basic") {
        monthlyCost = 10;
    } else if (plan === "Premium") {
        monthlyCost = 20;
    } else if (plan === "Enterprise") {
        monthlyCost = 50;
    };
    
    let totalCost = monthlyCost * months;

    totalCost = totalCost - discount;

    return totalCost;
}; //Calculate subscription costs on plan type

console.log('Basic plan: $${calculateSubscriptionCost("Basic", 6, 10)}'); //6 month plan with 10% discount
console.log('Premium plan: $${calculateSubscriptionCost("Premium, 12, 0)}'); //12 month plan with no discount

//Task 5 - Returning Values
let convertCurrency = function(amount, exchangeRate) {
    let convertAmount= (amount * exchangeRate).toFixed(2);

    return convertedAmount;
}; //Convert currency

console.log('Converted Currency 1: $${convertCurrency(100, 1.1)}') //Log converted currency
console.log('Converted Currency 2: $${calculateSubscriptionCost(250, 0.85)}'); //Log converted currency

//Task 6 - Higher-Order Functions
let orders = [200, 600, 1200, 450, 800]; //Declare an array of orders

let applyBulkDiscount = (orders, discountFunction) => {
    let discountOrders = orders.map(discountFunction);
    console.log("Updated Orders:", discountedOrders)
}; //Apply discount to orders

applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount); //Apply 10% discount to orders over 500

//Task 7 - Closures
function createExpenseTracker() {
    let totalExpenses = 0;
    return function(expense) {
        totalExpenses += expense;
        return 'Total Expense: $${totalExpenses}'
    };
}; //Track business expenses

let tracker = createExpenseTracker();
console.log(tracker(200)); //Log expense of 200
console.log(tracker(150)); //Log expense of 150
