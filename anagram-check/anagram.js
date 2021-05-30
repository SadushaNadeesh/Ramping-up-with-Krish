function compareWords(text1, text2) {

    let t1 = text1.split("").sort();
    let t2 = text2.split("").sort();
    isAnagram = false;

    if (t1.length === t2.length) {
        if (JSON.stringify(t1) === JSON.stringify(t2)) {
            isAnagram = true;
        } else {
            isAnagram = false;
        }
    }
    else {
        isAnagram = false;
    }
    return isAnagram ? console.log(text1 + " and " + text2 + " are anagram words") : console.log(text1 + " and " + text2 + " are not anagram words.");
}


//Write a program to find a given words are a anagram or not.
//An anagram is a word or phrase formed by rearranging the letters of a different word or phrase

const anagram = () => {
    let text1 = 'silent';
    let text2 = 'listen';
    return compareWords(text1, text2);
}

module.exports = anagram;