const sumAll = function(intOne, intTwo) {
    let x = [];
    let lowerNum = Math.min(intOne, intTwo);
    let higherNum = Math.max(intOne, intTwo);
    let sum = 0;
    if (lowerNum < 0 || higherNum < 0) {
      return "ERROR";
    } else if (typeof(intOne) != typeof(1) || typeof(intTwo) != typeof(1)) {
      return "ERROR";
    } else {
    for (let i = lowerNum; i < higherNum + 1; i++) {
      x.push(i);
    }
    for (let i = 0; i < x.length; i++){
      sum += x[i];
    }
}
return sum;
  }

// Do not edit below this line
module.exports = sumAll;
