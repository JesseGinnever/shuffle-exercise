import { shuffle, createDeck } from './shuffle'

describe('test shuffle', () => {
  it('creates a deck of cards and shuffles it', () => {
    let deckOfCards = createDeck();
    let originalDeckOrder = deckOfCards.toString();
    
    expect(shuffle(deckOfCards).toString()).not.toBe(originalDeckOrder.toString());
  });

  it('creates two decks of cards, unshuffled', () => {
    expect(createDeck().toString()).toBe(createDeck().toString());
  });
});