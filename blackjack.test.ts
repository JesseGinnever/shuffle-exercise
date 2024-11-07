import { Blackjack } from './blackjack';
import { Card } from './deck'

describe('test shuffle', () => {
  it('play a game of blackjack', () => {
    let blackjackGame = new Blackjack();
    blackjackGame.deal();
    //mocking the draw
    blackjackGame.plyrHnd = [new Card('Spade', 'Ace'), new Card('Diamonds', '10')];
    blackjackGame.dlrHnd = [new Card('Spade', '8'), new Card('Hearts', '10')];
    blackjackGame.play();
    expect(blackjackGame.play()).toBe('Player 1 Wins');
  });

  it('play a game of blackjack 2', () => {
    let blackjackGame = new Blackjack();
    blackjackGame.deal();
    //mocking the draw
    blackjackGame.dlrHnd = [new Card('Spade', 'Ace'), new Card('Diamonds', '10')];
    blackjackGame.plyrHnd = [new Card('Spade', '8'), new Card('Hearts', '10')];
    blackjackGame.play();
    expect(blackjackGame.play()).toBe('Player 2 Wins');
  });
});