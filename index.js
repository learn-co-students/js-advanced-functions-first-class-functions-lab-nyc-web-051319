const returnFirstTwoDrivers = function(drivers){
  let array = drivers.slice(0, 2)
  return array
}

const returnLastTwoDrivers = function(drivers){
  let array = drivers.slice(-2)
  return array
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

function createFareMultiplier(multiplier){
  return function(integer){
    return integer * multiplier
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function fetchSpecifiedDrivers(array, fun){
  return fun(array)
}
// fareDoubler() — Declare a variable with const and assign a function
// returned by createFareMultiplier() to it.
// Invoke createFareMultiplier() in such a way that the new fareDoubler()
// function accepts a fare as its lone argument and doubles it.
