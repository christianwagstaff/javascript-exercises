const removeFromArray = function() {
    let args = Array.from(arguments);
    let startingArray = args[0];
    let toRemove = args.slice(1);
    let amount = toRemove.length;
    for (let i = 0; i < amount; i++) {
        let index = startingArray.indexOf(toRemove[i]);
        if (index > -1) {
            startingArray.splice(index, 1);
        }
    }
    return startingArray;
};

// Do not edit below this line
module.exports = removeFromArray;
