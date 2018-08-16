// Write your solution in this file!
const driver = {
  name : 'Sam',
  address : '12 Broadway'
}

function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = { ...driver };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  const newObj = Object.assign({}, driver, { [key]: value });
  return newObj;
}


function deleteFromDriverByKey(driver, key){
  
  const newDriver = Object.assign({}, driver);
  delete newDriver.key;
  return newDriver;
  
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver.key;
  return driver;
}


