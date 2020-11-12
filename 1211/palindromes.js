// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. A few examples:

// anna
// bob
// ABBA
// Return true if the given string is a palindrome. Otherwise, return false.

function cleanUp(str) {
  return str.toLowerCase().replace(/[\W]/g, '');
};

function isPalindrome(str) {
  const cleanStr = cleanUp(str);
  const reverseStr = cleanStr.split('').reverse().join('');
  return reverseStr === cleanStr;
};

console.log(isPalindrome("ABBA"));
console.log(isPalindrome("Bobby"));
console.log(isPalindrome("ABBA"));

