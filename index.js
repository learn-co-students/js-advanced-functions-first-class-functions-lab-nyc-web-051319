// Code your solution in this file!
const returnFirstTwoDrivers = function (driverArr) {
    return driverArr.slice(0,2)
}

const returnLastTwoDrivers = function (driverArr) {
    return driverArr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier
    }
}

const doubling = createFareMultiplier(2)
function fareDoubler(fare) {
    return doubling(fare)
}

const tripling = createFareMultiplier(3)
function fareTripler(fare) {
    return tripling(fare)
}

function selectDifferentDrivers(drivers, funct) {
    return funct(drivers)
}