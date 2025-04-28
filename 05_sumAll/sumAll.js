const sumAll = function(start, end) {
    // Check if the arguments are not negative
    if (start < 0 
        || end < 0 
        || start % 1 !== 0 
        || end % 1 !== 0
        || typeof start !== typeof 0
        || typeof end !== typeof 0
    ) return "ERROR";

    // Check which is bigger
    if (start > end)
    {
        let buffer = start;
        start = end;
        end = buffer;
    }

    // Initialize a counter at 0
    let sum = 0;
    // Loop intial count = start, and once equal to end, ends
    for (let i = start; i <= end; i++)
    {
        sum += i;
    }
    return sum; 
};

// Do not edit below this line
module.exports = sumAll;
