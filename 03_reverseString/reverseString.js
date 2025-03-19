const reverseString = function(stringToReverse) {
    const splittedArray = stringToReverse.split("");
    const reversedArray = splittedArray.reverse();
    return reversedArray.join("")
};

// Do not edit below this line
module.exports = reverseString;
