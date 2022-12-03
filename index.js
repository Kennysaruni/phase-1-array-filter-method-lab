// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(
      (found) => found.toLowerCase() === name.toLowerCase()
    );
  }
function fuzzyMatch(drivers,name){
    return drivers.filter(
        (found) => found.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
}
function matchName(drivers, name) {
    return drivers.filter((newsource) => newsource.name === name);
  }