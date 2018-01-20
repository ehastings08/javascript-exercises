var snakeCase = function(str) {
  // First, strip punctuation from string
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  // Next, add space before upper case letters IF THERE ARE UPPER CASE LETTERS BUT NO SPACES IN THE STRING. To do this, loop through the string starting at index 1 (we ignore initial capitalization) until an uppercase letter is found. When that happens, splice in a space.

  if (!(hasWhiteSpace(str)) && hasUpperCaseLetters(str)) {
    var spaced_str = str[0];

    for (var i=1; i<str.length; i++) {
      if (str[i] == str[i].toUpperCase()) {
        spaced_str += " "; 
      }
      spaced_str += str[i]
    }
  } else {
    spaced_str = str;
  }


  // Next, lower case the string, split on spaces, and rejoin with underscores
  return spaced_str.toLowerCase().split(" ").join("_");
}

var hasWhiteSpace = function(str) {
  return /\s/g.test(str);
}

var hasUpperCaseLetters = function(str) {
  for (var i=0; i<str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      return true;
    }
  }
  return false;
}

module.exports = snakeCase
