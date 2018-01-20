function echo(str) {
	return str;
}

function shout(phrase) {
	return phrase.toUpperCase();
}

function repeat(str, number = 2) {
	var output_str = "";
	for (var i=0; i<number; i++) {
		output_str += ( str + " " );
	}
	return output_str.trim();
}

function pieceOfWord(word, position) {
	return word.slice(0, position);
}

function firstWord(phrase) {
	var array = phrase.split(" ");
	return array[0];
}

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
	// This function just capitalizes the word given to it, use in conjunction with titleCreator
}

function titleCreator(title) {
	// something is happening with 'the'
	var little_words = ["the","over","and","or","a","an"]
	var array = title.split(" ");
	var title = array.map(function(word) {
		if (array.indexOf(word) == 0 || little_words.indexOf(word) == -1) {
			return capitalize(word);
		} else {
			return word;
		}
	});
	return title.join(" ");
}

module.exports = {
	echo,
	shout,
	repeat,
	pieceOfWord,
	firstWord,
	capitalize,
	titleCreator
}