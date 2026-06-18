// Function 1:  for calculating tax
// Take a number (amount) and returns 10% of it as tax
function calculateTax(amount) {
    return amount * 0.1;    // 10% tax
}

// Function 2: conver it to upper case
// Take a string and converts it to uppercase
function convertToUppercase(text) {
    return text.toUpperCase();
}

// Function 3: findMaximum
// This one takes two number and return the biggest one
function findMaximum(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}



// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };