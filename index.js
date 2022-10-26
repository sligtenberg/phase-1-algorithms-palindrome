// solution 1:
const isPalindrome = (word) => word.length < 2 ? true : word[0] === word[word.length-1] ? isPalindrome(word.slice(1, word.length-1)) : false;

// solution 2:
// const isPalindrome = (word) => word === reverseString(word);

// const reverseString = (word) => {
//   let reversedWord = '';
//   for (let i in word) reversedWord = reversedWord + word[word.length - 1 - i];
//   return reversedWord;
// }

/* 
  Add your pseudocode here

  solution 1:
  1) word length < 2 ? true => return true : false => step 2
  2) 1st letter == last letter ? remove 1st and laste letters and chack if the remaining letters form a palindrome : return => false

  solution 2:
  1) reverse the word
  2) check if the revered word equals the original word
*/

/*
  Add written explanation of your solution here

  solution 1:
  if the word has a length of zero or 1 letter, it's a palindrome.
  if it has two or more letters, we need to check if the first and last letters match each other.
  if they do, then we chop them off and examine the remaining letters for palindromeness.
  if they don't, then we don;t have a palindrome.

  solution 2:
  if the word equals itself backwards, then it;s a palindrome
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
