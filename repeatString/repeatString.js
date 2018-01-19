var repeatString = function(str, num) {
  if (num >= 0) {
    var concat_str = '';
    for (i = 0; i<num; i++) {
      concat_str += str;
    }
    return concat_str;
  } else {
    return 'ERROR';
  }
}


module.exports = repeatString
