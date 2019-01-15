
function findMatching(collection, name) {
  a = collection.filter(function(driver) {  driver.toLowerCase() === name.toLowerCase();
  });
  return a 
}

function findMatching1(collection, name) {
  let newDriver = []
  for (const driver of collection) 
    {if (driver.toLowerCase() === name.toLowerCase()) { newDriver.push(driver) }
    }
  return newDriver
}
