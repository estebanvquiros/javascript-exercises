const fibonacci = function(num) {

    let n = typeof num !== 'number' ? parseInt(num, 10) : num; 

    if (n < 0) return "OOPS";

    let a = 0; //F(0)
    let b = 1; //F(1)
    
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return n === 0 ? a : b;

};

// Do not edit below this line
module.exports = fibonacci;
