function count(text) {
    let textWithoutSpace = text.replace(/\s+/g, "").trim();
    let result = {};

    for (let str of textWithoutSpace) {
        result[str] = result.hasOwnProperty(str) ? result[str] + 1 : 1;
    }

    console.log(result);
}


// write a program to count and tell the number of repetition of each letter within the sentence given.
// let text = "these days i am studying";
// count(text);

const countLetters = (text) => {
    return count(text);
}

module.exports = countLetters;