function translate(word) {
    if (word === null) {
        return null;
    }
    
	// convert string to lowercase
	const lowercase = word.toLowerCase();
	// convert to array
	const wordArray = lowercase.split('');
	// if starts with vowel add 'way'
	if (
		wordArray[0] === 'a' ||
		wordArray[0] === 'e' ||
		wordArray[0] === 'i' ||
		wordArray[0] === 'o' ||
		wordArray[0] === 'u'
	) {
		wordArray.push('w', 'a', 'y');
	} else {
		do {
			// if starts with consonants, add to end of word and add 'ay'
			const firstLetter = wordArray[0];
			wordArray.push(firstLetter);
			wordArray.splice(0, 1);
		} while (
			wordArray[0] !== 'a' &&
			wordArray[0] !== 'e' &&
			wordArray[0] !== 'i' &&
			wordArray[0] !== 'o' &&
			wordArray[0] !== 'u'
		);
		wordArray.push('a', 'y');
	}
	// array to string
	const translatedWord = wordArray.join('');
	return translatedWord;
}
