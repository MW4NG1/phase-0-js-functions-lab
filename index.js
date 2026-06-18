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

// Function 4: isPalindrome
// Will check if a word reads the same forward and backward (case insesitive)
function isPalindrome(word) {
    word = word.toLowerCase();  //Ignore uppercase/lowercase differences

    let reversedWord = word.split('').reverse().join('');  // Reverse the word

    return word === reversedWord;  // returns true or false
}

// Function 5: calculateDiscountedPrice
// To check if word reads the same forward and backword (case-insensitive)
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * discountPercentage /100);
}  




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };