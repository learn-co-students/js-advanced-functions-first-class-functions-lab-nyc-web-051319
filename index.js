// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
  return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers){
  return drivers.slice(-2)
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

function createFareMultiplier(){
  return function(num){
    return num * num
  }
}

function fareDoubler(fare){
  return fare * 2
}

function fareTripler(fare){
  return fare * 3
}

function selectDifferentDrivers(drivers, f) {
  return f(drivers)
}
