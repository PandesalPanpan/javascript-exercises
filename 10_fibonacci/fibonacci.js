const fibonacci = function(number) {
    if (number < 0) return "OOPS";

    let count = 2;
    const fibonacci = [0, 1];
    if (number < 2) // Return immediately since the position is initial
    {
        return fibonacci[number];
    }


    while(count <= number)
    {
        const current = fibonacci[count - 1]
        const previous = fibonacci[count - 2];

        fibonacci.push(current + previous);
        count++;
    }

    // Returns the last one
    return fibonacci.pop();
};

// Do not edit below this line
module.exports = fibonacci;
