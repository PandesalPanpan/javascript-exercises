const findTheOldest = function(people) {
   // Get the age of each person to compare
   // Sort by Age
   const sortedByAge = people.sort((a, b) => {
    // Check if yearOfDeath exists and use todays year instead
    if (!a.yearOfDeath) a.yearOfDeath = (new Date).getFullYear();
    if (!b.yearOfDeath) b.yearOfDeath = (new Date).getFullYear();

    firstAge = a.yearOfDeath - a.yearOfBirth;
    secondAge = b.yearOfDeath - b.yearOfBirth;
    return firstAge - secondAge;
   });
   return sortedByAge.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
