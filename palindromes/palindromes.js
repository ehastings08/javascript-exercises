var palindromes = function(str) {
  reversed_str = str.toLowerCase().split("").reverse().join("");
  return (reversed_str == str.toLowerCase() ? true : false);
}

module.exports = palindromes
