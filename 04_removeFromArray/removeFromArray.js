const removeFromArray = function(arrays, ...args) {
    args.forEach((arg) => {
        const index = arrays.indexOf(arg);
        if (index > -1) {
            arrays.splice(index, 1);
        }
    })
    return arrays;
};

// Do not edit below this line
module.exports = removeFromArray;
