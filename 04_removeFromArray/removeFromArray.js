const removeFromArray = function(x, value ) {
    const valueLocation = x.indexOf(value);
    x.splice(valueLocation, 1);
  return x;
  };

// Do not edit below this line
module.exports = removeFromArray;
