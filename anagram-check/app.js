function compareWords(text1, text2) {

    let t1 = text1.split("").sort();
    let t2 = text2.split("").sort();

    for (i = 0; i < t1.length; i++) {
        if (t1.length === t2.length) {
            if (t1[i] === t2[i]) {
                console.log(text1 + " and " + text2 + " are anagram words");
                break;
            }
            else {
                console.log(text1 + " and " + text2 + " are not anagram words.");
                break;
            }
        }
        else {
            console.log(text1 + " and " + text2 + "have different lengths");
        }
        break;
    }
}



//Write a program to find a given words are a anagram or not.
//(checking if the two words consist of same letters with same length)/ (differnt words with same letters is a anagram.)
// let text1 = 'silent';
// let text2 = 'listen';

// compareWords(text1, text2);

const anagram = (text1, text2) => {
    return compareWords(text1, text2);
}

module.exports = anagram;