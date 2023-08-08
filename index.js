function isPalindrome(word) {
  // Convert the word to lowercase
  word = word.toLowerCase();

  // Initialize two pointers, one at the beginning of the word and one at the end
  let start = 0;
  let end = word.length - 1;

  // Loop while the start pointer is less than the end pointer
  while (start < end) {
    // If the characters at the start and end pointers are not the same, return false
    if (word[start] !== word[end]) {
      return false;
    }
    // Increment the start pointer and decrement the end pointer
    start++;
    end--;
  }

  return true;
}

/* 
  Pseudocode:
  1. Convert the word to lowercase.
  2. Initialize two pointers, start at 0 and end at the last character index.
  3. Loop while the start pointer is less than the end pointer.
  4. Compare characters at start and end pointers. If not equal, return false.
  5. Increment start and decrement end pointers.
  6. If the loop completes without returning false, the word is a palindrome, so return true.
*/

// Test cases
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

module.exports = isPalindrome;
