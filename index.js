
function findMatching(collection, name) {
  return collection.filter(function(driver) { return driver.toLowerCase() === name.toLowerCase();
  });
}

function findMatching1(collection, name) {
  let new = []
  for (constant driver of collection) {if driver.toLowerCase() === name.toLowerCase()) new.push(driver) }
  return new
}
}

