function printDeckOfCards(deck) {
    function playingCards(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];

        if (!validFaces.includes(face)) {
            throw new Error('Invalid card face!');
        }

        if (!validSuits.includes(suit)) {
            throw new Error('Invalid card suit!');
        }

        const card = {
            face: face,
            suit: suit,
            toString: function () {
                let suitSymbol;
                switch (suit) {
                    case 'S':
                        suitSymbol = '\u2660';
                        break;
                    case 'H':
                        suitSymbol = '\u2665';
                        break;
                    case 'D':
                        suitSymbol = '\u2666';
                        break;
                    case 'C':
                        suitSymbol = '\u2663';
                        break;
                }
                return `${face}${suitSymbol}`;
            }
        };
        return card;
    }

    const printedCards = [];

    for (let i = 0; i < deck.length; i++) {
        const cardString = deck[i];
        let face, suit;

        if (cardString.length === 2) {
            [face, suit] = cardString.split('');
        } else if (cardString.length === 3 && cardString[0] === '1' && cardString[1] === '0') {
            face = '10';
            suit = cardString[2];
        } else {
            printedCards.push(`Invalid card: ${cardString}`);
            continue;
        }

        try {
            const card = playingCards(face, suit);
            printedCards.push(card.toString());
        } catch (error) {
            printedCards.push(`Invalid card: ${cardString}`);
        }
    }

    console.log(printedCards.join(' '));
}