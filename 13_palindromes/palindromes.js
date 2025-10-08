const palindromes = function (string) {
    let normalizedString = string.toLowerCase().replace(/[!.,\s]/g, '');
    let reversedString = normalizedString.split('').reverse().join('');
    return normalizedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
