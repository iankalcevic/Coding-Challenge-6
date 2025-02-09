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
