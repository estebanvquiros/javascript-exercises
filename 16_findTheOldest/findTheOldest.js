function getAge(birth, death) {
    return !death
        ? new Date().getFullYear() - birth
        : death - birth;
}

const findTheOldest = function(people) {

    return people.reduce((oldest, current) => {

        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        return currentAge > oldestAge ? current : oldest;

    });
    
};

// Do not edit below this line
module.exports = findTheOldest;
