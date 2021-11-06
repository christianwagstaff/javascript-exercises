const repeatString = function(word, amount) {
    together = '';
    let i;
    if (amount < 0) {
        return 'ERROR';
    }
    for (i=0; i < amount; i++) {
        together += word;
    }
    return together;
};

// Do not edit below this line
module.exports = repeatString;
