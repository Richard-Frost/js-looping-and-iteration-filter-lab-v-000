

function findMatching(collection, name) {
  let newDriverA = []
  for (const driver of collection) 
    {if (driver.toLowerCase() === name.toLowerCase()) { newDriver.push(driver) }
    }
  return newDriver
}

