const removeFromArray = function(array, ...elementsToRemove) {
    return array.filter(val => !elementsToRemove.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;

