//Task 1 - Function Declaration
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return profit;
}; //Calculate profit points

calculateProfit(20, 30, 100); //Expected profit value 1000
calculateProfit(50, 70, 200); //Expected profit value 4000

console.log("Total Profit: $", calculateProfit(20, 30, 100)); //Log results
console.log("Total Profit: $", calculateProfit(50, 70, 200)); //Log results 
