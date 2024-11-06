import { Deck } from './classShuffle'

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
});