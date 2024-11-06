export class Deck {
    suits: string[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    numericFaceValues: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
    royalFaceValues: string[] = ['Jack', 'Queen', 'King', 'Ace'];
    faceValues: string[] = this.numericFaceValues.concat(this.royalFaceValues);

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

    drawCard(): Card {
        return this.cards.pop();
    }
}

export class Card {
    royalFaceValues: string[] = ['Jack', 'Queen', 'King', 'Ace'];

    suit;
    faceValue;

    constructor(suit, faceValue) {
        this.suit = suit;
        this.faceValue = faceValue;
    }

    getFaceValue(): number {
        return this.royalFaceValues.includes(this.faceValue) ? 10 : parseInt(this.faceValue);
    }
}

export function playHighCard(deck1: Deck, deck2: Deck) :string {
    let deck1Count = 0;
    let deck2Count = 0;

    while (deck1.cards.length > 0 && deck2.cards.length > 0) {
        const deck1Card: Card = deck1.drawCard();
        const deck2Card: Card = deck2.drawCard();

        if (deck1Card.getFaceValue() > deck2Card.getFaceValue()) {
            deck1Count++;
        } else if (deck1Card.getFaceValue() < deck2Card.getFaceValue()) {
            deck2Count++;
        }
    }

    return deck1Count > deck2Count ? 'Player1 Wins!' : 'Player2 Wins!';
}