// Write your solution in this file!
let driver = {
  name : 'Olya',
  address : '1004 Gates ave'
}

function updateDriverWithKeyAndValue(driver, key, value){
  let newDriver = driver;
  key = newDriver['name'];
  value = 'Sam';
  key = newDriver['adress'];
  value = '11 Broadway';
  
  return newDriver;
}