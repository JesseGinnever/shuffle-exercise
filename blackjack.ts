import {Card, Deck} from './deck'
export class Blackjack {
    plyrHnd: Card[];
    dlrHnd: Card[];
    shffldDeck: Deck;

    constructor() {
        this.shffldDeck = new Deck();
        this.plyrHnd = [];
        this.dlrHnd = [];

    }

    deal() {
        this.plyrHnd = [this.shffldDeck.drawCard(), this.shffldDeck.drawCard()];
        this.dlrHnd = [this.shffldDeck.drawCard(), this.shffldDeck.drawCard()];
    }

    play(): string {
        let playerHandValue = this.plyrHnd[0].getFaceValue() + this.plyrHnd[1].getFaceValue();
        let player2HandValue = this.dlrHnd[0].getFaceValue() + this.dlrHnd[1].getFaceValue()

        while (playerHandValue < 17) {
            playerHandValue += this.shffldDeck.drawCard().getFaceValue();
        }
        while (player2HandValue < 17) {
            player2HandValue += this.shffldDeck.drawCard().getFaceValue();
        }


        return playerHandValue > player2HandValue ? 'Player 1 Wins' : player2HandValue > playerHandValue ? "Player 2 Wins" : "Draw";
    }
}