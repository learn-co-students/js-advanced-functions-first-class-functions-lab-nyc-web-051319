// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
  return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array) {
  return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(num) {
  return function(num) {
    return num * num
  }
}

function fareDoubler(fare) {
  return fare * 2
}

function fareTripler(fare) {
  return fare * 3
}
function selectDifferentDrivers(arr, cb) {
  return cb(arr)
}
// let array = [1,2,3,4,5]

// console.log(returnLastTwoDrivers(array));
