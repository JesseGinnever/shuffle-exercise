import { Card, Deck, playHighCard } from './highCard'

describe('test shuffle', () => {
  it('creates a deck of cards and shuffles it', () => {
    let deck1: Deck = new Deck();
    let deck2: Deck = new Deck();
    deck2.shuffle();

    expect(JSON.stringify(deck1)).not.toBe(JSON.stringify(deck2));
  });

  it('creates two decks of cards, unshuffled', () => {
    expect(JSON.stringify(new Deck())).toBe(JSON.stringify(new Deck()));
  });

  it('play a game of high card', () => {
    let deck1: Deck = new Deck();
    let deck2: Deck = new Deck();

    deck1.cards = [new Card('Hearts', '2')];
    deck2.cards = [new Card('Hearts', '3')];

    expect(playHighCard(deck1, deck2)).toBe('Player2 Wins!');

    deck1.cards = [new Card('Hearts', '2')];
    deck2.cards = [new Card('Hearts', '3')];
    
    expect(playHighCard(deck2, deck1)).toBe('Player1 Wins!');    
  });
});