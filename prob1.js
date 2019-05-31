// Algorithm Practice for Linear/Binear Search!
// Write a function that performs a linear search!
// Remember, if the value you're searching for is NOT found, return -1!

// function linearSearch(arr, val) {
//     // add whatever parameters you deem necessary - good luck!
// }

////////////////PROBLEM 1 SOLUTION //////////////////////////////////////

const ourArray = [1,2,3,4,5,6,7,8,9,10];

function linearSearch(ourArray, element){
	for (let i = 0; i < ourArray.length; i++) {
        console.log('loop ran');
        if (ourArray[i] === element) {
        return ourArray[i];
        }
        }
    return -1;
};

console.log(linearSearch(ourArray, 11));



////////////////PROBLEM 2 SOLUTION //////////////////////////////////////

// Write a function that performs a binary search!
// Remember, if the value you're searching for is NOT found, return -1!
function binarySearch(arr, val) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    // add whatever parameters you deem necessary - good luck!
}

function binarySearch(arr, val) {
let start = 0
let stop = arr.length - 1
let middle = Math.floor((start + stop) / 2)
while (list[middle] !== val && start < stop) {
    if (val < list[middle]) {
        stop = middle - 1
    } else {
        start = middle + 1
    }

    middle = Math.floor((start + stop) / 2)
    }
    return (list[middle] !== val) ? -1 : middle
};
const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(binarySearch(list, 10));





// ########### NODE QUESTIONS! DO THESE FIRST! DISCUSS OUT LOUD!!!!!!! ############ //
    // •Differentiate between JavaScript and Node.js
    // •Differentiate between Node.js and Express
    // •What is npm ?
    // •What’s the difference between global and local installation of dependencies ?
    // •What is package.json ? What are some common attributes of package.json ?
    // •What is middleware ?
    // •Explain the purpose of module.exports
    // •Explain the MVC framework
    // •How can you avoid callback hell ?


// Differentiate between JavaScript and Node.js
// JS operates in browser, node is server side

////////////////Answers to node questions //////////////////////////////////////////////////////////////////////////////////////

// Differentiate between Node.js and Express
// Node is the backend that allows you to carry out functions outside of the browser and Express is a middleware module that lets you create an api and the web application communicate


// What is npm ?
// Node package manager - lets you install packages and modules 


// What’s the difference between global and local installation of dependencies ?
// Global installation covers your whole machine, local is just for that folder/project to require those dependencies on an install/application.


// What is package.json ? What are some common attributes of package.json ?
// Is automatically created when you initiate node and contains information on the dependencies and information on the project.

// What is middleware ?
// It is software that acts as a bridge between an operating system or database and applications. Also known as “software glue”.


// Explain the purpose of module.exports
// Exposes internally scoped functions.  Makes functions available to the rest of your file.  Useful for separating functionality so that your code doesn’t get too large and the function can be called in other functions.

// Explain the MVC framework
// Model–view–controller is commonly used for developing software that divides an application into three interconnected parts. This is done to separate internal representations of information from the ways information is presented to and accepted from the user. The MVC design pattern decouples these major components allowing for efficient code reuse and parallel development.
// Model represents the data of the application. View represents the user interface of the application. Controller represents how user inputs or events are handled.


// ############################################################################### //
// these are regular old algorithms for practice! not necessarily related to searching!
// #1 are there duplicates?
// write a function that accepts a variable number of arguments and checks whether there
// are any duplicates among the arguments passed in. 
// areThereDuplicates(1,2,3) // would return false
// areThereDuplicates(3,4,5,1,7,9,7) // would return true
function areThereDuplicates(){
    // Good luck!
}
// #2 max sub-array sum
// write a function that accepts an array of integers and a number. the function should
// find the maximum sum of a subarray with the length of the number passed in. Note that
// a subarray must consist of consecutive elements from the original array.
// maxSubArraySum([100,200,300,400], 2) // returns 700
// maxSubArraySum([-3,4,0,-2,6,-1], 2) // returns 5
// maxSubArraySum([1,4,2,10,23,3,1,0,20], 4) // returns 39
function subArraySum(){
    // Good luck!
}
// ############################ EXTRA CHALLENGING ################################# //
// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the given number ?
function largestPrimeFactor(number) {
    // Good luck!
    return true;
}
largestPrimeFactor(13195);
// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two n - digit numbers.
function largestPalindromeProduct(n) {
    // Good luck!
    return true;
}
largestPalindromeProduct(3);