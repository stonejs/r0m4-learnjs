function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
//console.log(multiplier(3));
//console.log(twice(5));
// → 10


function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
