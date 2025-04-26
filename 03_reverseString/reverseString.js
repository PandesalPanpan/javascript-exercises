const reverseString = function(string) {
    // Convert the string into a list of characters
    const chars = string.split('');
    let result = "";
    // Loop starting from the end of the string
    for (let i = string.length - 1; i >= 0; i--)
    {
        result += chars[i];
    }
    // Add the char one by one
    // Return the result
    return result;
};

// Do not edit below this line
module.exports = reverseString;
