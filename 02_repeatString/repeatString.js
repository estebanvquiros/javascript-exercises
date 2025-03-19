const repeatString = function(stringToRepeat, repeatTimes) {
    if (repeatTimes < 0) return "ERROR";
    let stringResult = '';
    for (let i = 0; i < repeatTimes; i++) {
        stringResult += stringToRepeat;
    }
    return stringResult;
};

// Do not edit below this line
module.exports = repeatString;
