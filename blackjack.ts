import {Card, Deck} from './classShuffle'
export class Blackjack {
    plyrHnd: Card[];
    dlrHnd: Card[];
    shuffledDeck: Deck;

    constructor() {
        this.shuffledDeck = new Deck();
        this.plyrHnd = [];
        this.dlrHnd = [];
    }

    deal() {
        this.plyrHnd = [this.shuffledDeck.drawCard(), this.shuffledDeck.drawCard()];
        this.dlrHnd = [this.shuffledDeck.drawCard(), this.shuffledDeck.drawCard()];
    }

    play(): string {
        let playerHandValue = this.plyrHnd[0].getFaceValue() + this.plyrHnd[1].getFaceValue();
        let player2HandValue = this.dlrHnd[0].getFaceValue() + this.dlrHnd[1].getFaceValue();

        while (playerHandValue < 17) {
            playerHandValue += this.shuffledDeck.drawCard().getFaceValue();
        }

        while (player2HandValue < 17) {
            player2HandValue += this.shuffledDeck.drawCard().getFaceValue();
        }

        return playerHandValue > player2HandValue ? 'Player 1 Wins' : player2HandValue > playerHandValue ? "Player 2 Wins" : "Draw";
    }
}