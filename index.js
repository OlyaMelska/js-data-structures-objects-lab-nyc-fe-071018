// Write your solution in this file!
const driver = {
  name : 'Sam',
  address : '11 Broadway'
}

function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = { ...driver };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value });
}

function deleteFromDriverByKey(driver, key){
  
  Object.assign(newDriver, driver, [key]);
  delete newDriver.key;
  return newDriver;
  
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver.key;
  return driver;
}


