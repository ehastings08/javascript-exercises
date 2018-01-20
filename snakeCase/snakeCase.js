var snakeCase = function(str) {
  // First, strip punctuation from string and lowercase it
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
  // Next, add space before upper case letters
  // Then, split on spaces
  split_str = str.split(" ");
  // Rejoin with underscores
  snake_case = split_str.join("_");
  return snake_case;
}

module.exports = snakeCase
