function mirrorWords(input) {
    let result = {};
    let regexPattern = /[@](\b[A-Za-z]{3,}\b)[@]{2}(\b[A-Za-z]{3,}\b)[@]|[#](\b[A-Za-z]{3,}\b)[#]{2}(\b[A-Za-z]{3,}\b)[#]/g;
    let text = input.shift();
    let matchedWords = text.match(regexPattern) ? text.match(regexPattern) : [];

    if (matchedWords.length === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${matchedWords.length} word pairs found!`);

        for (let word of matchedWords) {
            let wordArr = word.startsWith('@') ? word.split('@') : word.split('#');

            if (wordArr[1] === wordArr[3].split('').reverse().join('')) {
                result[wordArr[1]] = wordArr[3];
            }
        }
    }

    let mirrorWords = Object.keys(result);

    if (mirrorWords.length > 0) {
        mirrorWords = mirrorWords.map(x => `${x} <=> ${result[x]}`);
        console.log("The mirror words are:");
        console.log(mirrorWords.join(', '));
    } else {
        console.log("No mirror words!");
    }
}