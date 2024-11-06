import { shuffle, createDeck } from './shuffle'

describe('test shuffle', () => {
  it('creates two decks of cards, unshuffled', () => {
    expect(createDeck().toString()).toBe(createDeck().toString());
  });

  it('creates a deck of cards and shuffles it', () => {
    //@TODO add test here
  });

});