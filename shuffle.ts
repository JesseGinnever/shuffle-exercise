export function createDeck() {
    const suits: string[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    const deck: string[] = [];

    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push(`${rank} of ${suit}`);
        }
    }

    return deck;
}

export function shuffle(deck) {
    for (let i = 0; i < deck.length; i++) {
        const j = Math.floor(Math.random() * deck.length);

        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}