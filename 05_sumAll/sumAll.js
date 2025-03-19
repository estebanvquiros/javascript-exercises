const sumAll = function(startNumber, finishNumber) {
    
    if (
           !Number.isInteger(startNumber) 
        || !Number.isInteger(finishNumber) 
        || startNumber < 0 
        || finishNumber < 0
    ) return "ERROR";

    if (startNumber > finishNumber) {
        let temp = startNumber;
        startNumber = finishNumber;
        finishNumber = temp;
    }

    let result = 0;
    for (let i = startNumber; i <= finishNumber; i++) {
        result += i;
    }
    return result;
};

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;
