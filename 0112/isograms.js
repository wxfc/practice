// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram.

function isIsogram(str) {
  let arr = str.toLowerCase().split('');
  return new Set(arr).size === arr.length  
};

console.log(isIsogram('aba'));
console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('moOse'));