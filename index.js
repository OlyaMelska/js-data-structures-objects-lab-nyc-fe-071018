// Write your solution in this file!
let driver = {
  name : 'Olya',
  address : '1004 Gates ave'
}

function updateDriverWithKeyAndValue(driver, key, value){
  let newDriver = driver;
  if(key === newDriver.name){
    value = 'Sam';
  }
  if(key === newDriver.address){
    value = '11 Broadway';
  }
  return newDriver;
}