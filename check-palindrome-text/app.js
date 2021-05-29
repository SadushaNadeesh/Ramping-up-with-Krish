// program to check if the string is palindrome or not
//(reverse word should be equal to the given word.)
// let text = 'NooN';
// checkPalindrome(text);


// using algorithm
function checkPalindrome(word) {

    for(let i=0; i<Math.floor(word.length/2);i++){
        if(word[i] == word[word.length-1-i]) {
            console.log('It is a palindrome word');
            break;
        }
        else {
            console.log('It is not a palindrome word');
            break;
        }
    }
}

const palindromeText = (text) => {
    return checkPalindrome(text);
}

module.exports = palindromeText;

//method 2
//using reverse function.
// function checkPalindrome(word) {

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