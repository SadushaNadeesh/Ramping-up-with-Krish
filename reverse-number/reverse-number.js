function numberReverse(numberToReverse) {
    let num = numberToReverse;
    let reverseNumber = 0;

    if (numberToReverse % 1 === 0 && num > 0) {
        while (num > 0) {
            reverseNumber = reverseNumber * 10 + num % 10;
            num = Math.floor(num / 10);
        }

    }

    return console.log(reverseNumber);

}

const reverseNumber = () => {
    let numberToReverse = 12345;
    return numberReverse(numberToReverse);
}

module.exports = reverseNumber;