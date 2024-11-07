## PR NOTES
### What has changed?
1. added new blackjack.ts class
2. added new blackjack.test.ts file

### Why did it change?
1. We needed to add functionality, on top of existing playing card functionality, to automatically execute a game of Blackjack
2. Add test coverage for this new functionality

### What is affected?

No existing functionality is affected, only the addition of blackjack functionality.


## Story details

Implement an automated Blackjack game, using existing playing card functionality.

Blackjack: 

    Blackjack is played between a "dealer" and a "player".  
    Each person will be given two cards.  
    Each player shall draw an additional card until the face balue of their cards is equal to, or greater than 17.
    If a player's total card value total is greater than 21, they cannot win.
    Once the above condition is reached for both player and dealer, the player with the highest total card value, but less than 21, wins.
    The new method should return the results of the game.