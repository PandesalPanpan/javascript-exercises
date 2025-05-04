const palindromes = function (string) {
    // Extract to an array to only its characters without puncutations and spaces
    let extractedString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();


    // Copy the string -> Convert to Array -> reverse it -> Join it
    let reversedString = extractedString.split('').reverse().join('');

    // Compare Original and ReversedCopy
    return extractedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
