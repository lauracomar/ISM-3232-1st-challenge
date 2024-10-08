// Task 1: Variables and Data Types
let employeeName = "Carlos Sainz";
const employeeID = 9011994;
var isActive = true;
console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));

// Task 2: Compound Data Types
let products = ["ferrari, chili pepper, sunglasses"];
const productdetails = {
    name : "ferrari",
    price : 120.00,
    inStock : true,
}
console.log (products, productdetails);

// Task 3: Assignment Operators
let accountbalance = 200.00;
console.log(accountbalance);
accountbalance +=75.00;
console.log (accountbalance); //275.00
accountbalance -=20.00;
console.log (accountbalance); // 255.00
accountbalance *=5.00;
console.log (accountbalance); // 1275.00
accountbalance /=5.00;
console.log (accountbalance); // 255.00
accountbalance %=3.00;
console.log (accountbalance); // 0.00

// Task 4: Comparison Operators
employeeScore1 = 55;
employeeScore2 = 61;

console.log(employeeScore1>employeeScore2);
console.log(employeeScore1<employeeScore2);
console.log(employeeScore1>=employeeScore2);
console.log(employeeScore1<=employeeScore2);
console.log(employeeScore1===employeeScore2);
console.log(employeeScore1!==employeeScore2);

// Task 5: Logical Operators
let hasKeyCard = true; 
let hasPermission = false; 

console.log(hasKeyCard&&hasPermission);
console.log(hasKeyCard||hasPermission);
console.log(!hasKeyCard);
