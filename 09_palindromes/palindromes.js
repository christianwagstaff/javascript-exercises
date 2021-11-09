const palindromes = function (string) {
    let punctuationless = string.replace(/[^\w]/g,"");
    punctuationless = punctuationless.toLowerCase();
    let stringArray = Array.from(punctuationless);
    for (let i = 0; i <= punctuationless.length; i++) {
        if (stringArray[i] !== stringArray[punctuationless.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
