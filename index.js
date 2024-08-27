// Code your solution in this file!
const returnFirstTwoDrivers = (function(drivers) {
    let list = []
    list[0] = drivers[0]
    list[1] = drivers[1]
    return list
    
})

const returnLastTwoDrivers = (function(drivers) {
    let list = []
    const size = drivers.length
    list[0] = drivers[size-2]
    list[1] = drivers[size-1] 
    return list
});

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};


const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(arrayOfDrivers, fn) {
    return fn(arrayOfDrivers);
};

