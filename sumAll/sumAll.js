var sumAll = function(min, max) {
  if (min > max) {
    return 'Invalid input!';
  } else {
    var sum = 0;
    for (var i=min;i<=max;i++) {
      sum += i;
    }
    return sum;
  }
}

module.exports = sumAll
