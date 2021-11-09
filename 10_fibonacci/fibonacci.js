const fibonacci = function(number) {
    let fib1 = 0;
    let fib2 = 1;
    number = parseInt(number);
    if (!number) return "OOPS";
    if (number < 0) return 'OOPS';
    if (number === 0) return fib1;
    for (let i = 0; i < number; i++) {
        let fib3 = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib3;
    }
    return fib1;
};

// Do not edit below this line
module.exports = fibonacci;
