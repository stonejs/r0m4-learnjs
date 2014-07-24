function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(multiplier(3));
console.log(twice(5));
// → 10