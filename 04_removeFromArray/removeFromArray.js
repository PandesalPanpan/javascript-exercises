const removeFromArray = function(array, ...elementsToRemove) {
    // Check if elementToRemove exists in the array
    let result = new Array();
    return array.filter((element) => 
    {
        for (const elementToRemove of elementsToRemove)
        {
            if (element === elementToRemove)
            {
                return false;
            }
        }
        return true;
    });
    
};

// Do not edit below this line
module.exports = removeFromArray;

