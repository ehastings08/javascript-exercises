var palindromes = function(str) {
  reversed_str = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").split("").reverse().join("");
  return (reversed_str == str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"") ? true : false);
}

module.exports = palindromes
