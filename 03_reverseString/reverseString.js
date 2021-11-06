const reverseString = function(str) {
    let strArray = str.split("");
    let finalStr;
    finalStr = strArray.reverse();
    finalStr = finalStr.join('');
    return finalStr;
};

// Do not edit below this line
module.exports = reverseString;
