// Write your solution in this file!
let driver = {
  name : 'Olya',
  address : '1004 Gates ave'
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
  let newDriver = {...driver};
  delete newDriver.key;
  return newDriver;
}