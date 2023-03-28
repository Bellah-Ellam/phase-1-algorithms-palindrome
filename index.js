function isPalindrome(word) {
  // Write your algorithm here

  // Convert the string to lowercase and remove any non-letter characters
  word = word.toLowerCase().replace(/[^a-z]/g, '');

  // Compare the reversed string to the original string
  return word === word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
  Define isPlaindrome function
    first convert the strings to lowercase
    compare original string with the reversed one
*/

/*
  Add written explanation of your solution here

The isPalindrome function takes one argument, a string str. 
It first converts the string to lowercase and removes any non-letter characters using a regular expression. 
This ensures that the function only deals with lowercase strings that are all letters.

The function then compares the reversed string to the original string using the split(), 
reverse(), and join() methods. If the two strings are equal, the function returns true to 
indicate that the string is a palindrome. If not, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
