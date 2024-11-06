export class Deck {
    suits: string[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    faceValues: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    cards: Card[] = [];

    constructor() {
        for (const suit of this.suits) {
            for (const faceValue of this.faceValues) {
                this.cards.push(new Card(suit, faceValue));
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}

export class Card {
    suit;
    faceValue;

    constructor(suit, faceValue) {
        this.suit = suit;
        this.faceValue = faceValue;
    }
}