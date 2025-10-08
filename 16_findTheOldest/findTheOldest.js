function getAge(birth, death) {
    return !death
        ? new Date().getFullYear() - birth
        : death - birth;
}

const findTheOldest = function(people) {

    return people.reduce((oldest, current) => {

        oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        return currentAge > oldestAge ? current : oldest;

    });
    
};

// Do not edit below this line
module.exports = findTheOldest;
