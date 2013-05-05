function Deck() {
    this.cards = this.generateShuffledDeck();
}

Deck.protoype.generateShuffledDeck = function() {
    var deckIndex = 0;

    //NOTE: Look at the use of constants here. It makes the loops much easier to read. 
    //No comments are required to explain what this loops is trying to do in terms of the 
    //number of iterations it's aiming to complete.
      
	for (var i = 0; i < NUMBER_OF_SUITS; ++i) {
		for (var j = 1; j <= DECK_SIZE/NUMBER_OF_SUITS; ++j) {
			this.cards[deckIndex] = new Card(j);
			deckIndex++;
		}
	}
};

Deck.prototype.cardsRemaining = function() {
    return this.cards.length 
};