

function findMatching(collection, name) {
  let newDriver = []
  for (const driver of collection) {if (driver.toLowerCase() === name.toLowerCase()) {new.push(driver)} }
  return newDriver
}
}

