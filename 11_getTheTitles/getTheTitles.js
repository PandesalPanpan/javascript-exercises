const getTheTitles = function(arrayOfObjectBooks) {
    // Get an object with properties
    /*
    const books = [
        {
            title: 'Book',
            author: 'Name'
        },
        {
            title: 'Book2',
            author: 'Name2'
        }
        ]

    Returns ['Book','Book2']
    */

    // Map and simply get the title
    return arrayOfObjectBooks.map((bookObject) => bookObject.title);


};

// Do not edit below this line
module.exports = getTheTitles;
