function checkPalindrome(word) {

    // convert string to an array
    let wordArray = word.split('');
    
    // reverse the array values
    let reverseArray = wordArray.reverse();

    // convert array to string
    let reverseWord = reverseArray.join('');

    if(word == reverseWord) {
        console.log('It is a palindrome word');
    }
    else {
        console.log('It is not a palindrome word');
    }
}
// program to check if the string is palindrome or not
//(reverse word should be equal to the given word.)
let text = 'noon';
checkPalindrome(text);