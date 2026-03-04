function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

function isPrime(num) {
    if (num<=1) {
        return false;
    }
    for (let i=2; i<=Math.sqrt(num); i++) {
        if (num%i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(11));
console.log(isPrime(12));

function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"))
function factorial(n) {
    let result = 1;
    for (let i=1 ; i<=n ; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));

function findLargest(arr) {
    let largest = arr[0];
    for(let i=0 ; i<arr.length ; i++) {
        if(arr[i]>largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargest([3, 7, 2, 9, 5]));

function star_triangle(n) {
    for (i=1 ; i<=n ; i++) {
        for (j=1 ; j<=i ; j++) {
            console.log("*");
        }
        console.log("\n")
    }
}
console.log(star_triangle(5));