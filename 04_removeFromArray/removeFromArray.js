const removeFromArray = function(originalArray, ...itemsToRemove) {
    
    const newArrayWithRemovedItems = [];

    originalArray.forEach(element => {
        if (!itemsToRemove.includes(element)){
            newArrayWithRemovedItems.push(element);
        }
    });
    
    return newArrayWithRemovedItems;

};

removeFromArray([1, 2, 3, 4], 2, 3);

// Do not edit below this line
module.exports = removeFromArray;
