// Write your solution in this file!
let driver = {
  name : 'Sam',
  address : '11 Broadway'
}

function updateDriverWithKeyAndValue(driver, key, value){
  let newDriver = {...driver};
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value });
}

function deleteFromDriverByKey(driver, key){
  Object.assign(newDriver, driver, { [key]: value });
  delete newDriver.key;
  return newDriver;
}