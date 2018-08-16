// Write your solution in this file!
let driver = {
  name : 'Sam',
  address : '11 Broadway'
}

function updateDriverWithKeyAndValue(driver, key, value){
  let newDriver = driver;
  key = newDriver['name'];
  value = 'Sam';
  key = newDriver['adress'];
  value = '11 Broadway';
  
  return newDriver;
}