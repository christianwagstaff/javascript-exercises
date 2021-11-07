const sumAll = function(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2)) {
        if (num1 < 0 || num2 < 0) {
            return 'ERROR';
        }
        let sum = 0;
        let start;
        let end;
        //Assign the smaller parameter to num1 and visavera
        if (num1 < num2) {
            start = num1;
            end = num2;
        } else {
            start = num2;
            end = num1;
        }
        let i;
        for (i = start; i <= end; i++) {
            sum += i
        }
        return sum;
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
