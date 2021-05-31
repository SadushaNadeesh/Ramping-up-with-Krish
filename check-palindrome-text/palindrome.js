// program to check if the string is palindrome or not
//The characters read the same backward as forward

function checkPalindrome(word) {
    isPalindrome = false;

    for (let i = 0; i < Math.floor(word.length / 2); i++) {
        if (word[i] == word[word.length - 1 - i]) {
            isPalindrome = true;
        }
        else {
            isPalindrome = false;
        }
    }
    return isPalindrome ? console.log(word + " is a palindrome") : console.log(word + " is not a palindrome.");
}

const palindromeText = () => {
    let text = 'noooon';
    return checkPalindrome(text);
}

module.exports = palindromeText;

//method 2
//using reverse function.
//function checkPalindrome(word) {

//     // convert string to an array
//     let wordArray = word.split('');

//     // reverse the array values
//     let reverseArray = wordArray.reverse();

//     // convert array to string
//     let reverseWord = reverseArray.join('');

//     if(word == reverseWord) {
//         console.log('It is a palindrome word');
//     }
//     else {
//         console.log('It is not a palindrome word');
//     }
// }