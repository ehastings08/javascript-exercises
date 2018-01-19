var palindromes = function(str) {
  reversed_str = str.split("").reverse().join("");
  return (reversed_str == str ? true : false);
}

module.exports = palindromes
