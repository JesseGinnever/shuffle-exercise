const numericFaceValues: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
const royalFaceValues: string[] = ['Jack', 'Queen', 'King', 'Ace'];

export class Deck {
  suits: string[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

  faceValues: string[] = numericFaceValues.concat(royalFaceValues);

  cards: Card[] = [];

  constructor() {
    for (const suit of this.suits) {
      for (const faceValue of this.faceValues) {
        this.cards.push(new Card(suit, faceValue));
      }
    }
  }

  shuffle(): void {
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
  suit: string;
  faceValue: string;

  constructor(suit: string, faceValue: string) {
    this.suit = suit;
    this.faceValue = faceValue;
  }

  getFaceValue(): number {
    if (this.faceValue === 'Ace') {
      return 1;
    } else {
      return royalFaceValues.includes(this.faceValue) ? 10 : parseInt(this.faceValue);
    }
  }
}