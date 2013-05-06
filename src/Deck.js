var DECK_SIZE = 52;
var NUMBER_OF_SHUFFLES = 15;

function Deck() {
    this.cards = new Array();
    
    function generateShuffledDeck(cards) {
        //NOTE: Look at the use of constants here. It makes the loops much easier to read. 
        //No comments are required to explain what this loops is trying to do in terms of the 
        //number of iterations it's aiming to complete.
          
        for (var i = 0; i < NUMBER_OF_SUITS; ++i) {
            for (var j = 1; j <= DECK_SIZE/NUMBER_OF_SUITS; ++j) {
                cards.push(new Card(j, i));
            }
        }
    };
    
    function shuffle(cards)
    {
		for (var i = 0; i < NUMBER_OF_SHUFFLES; ++i)
		{
			var fromIndex = Math.floor(Math.random()*DECK_SIZE);
			var toIndex = Math.floor(Math.random()*DECK_SIZE);

			var temp = cards[fromIndex];
			cards[fromIndex] = cards[toIndex];
			cards[toIndex] = temp;
		}

	};
    
    generateShuffledDeck(this.cards);
    shuffle(NUMBER_OF_SHUFFLES, this.cards);
}

Deck.prototype.dealCard = function() {
    return this.cards.pop();
}

Deck.prototype.cardsRemaining = function() {
    return this.cards.length 
};