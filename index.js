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
  const new_obj = { ...driver, key: { [key]: value }};
  return new_obj;
}