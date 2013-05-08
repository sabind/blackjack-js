var DECK_SIZE = 52;
var NUM_DECKS = 4;
var NUMBER_OF_SHUFFLES = 300;

var Deck = function(numDecks) {
    this.cards = new Array();

    function generateDeck(cards, numDecks) {
        //NOTE: Look at the use of constants here. It makes the loops much easier to read. 
        //No comments are required to explain what this loops is trying to do in terms of the 
        //number of iterations it's aiming to complete.

        for (var k = 0; k < numDecks; ++k) {
            for (var i = 0; i < NUMBER_OF_SUITS; ++i) {
                for (var j = 1; j <= DECK_SIZE / NUMBER_OF_SUITS; ++j) {
                    switch (i) {
                    case SUIT.CLUB.value:
                        cards.push(new Card(j, SUIT.CLUB));
                        break;
                    case SUIT.DIAMOND.value:
                        cards.push(new Card(j, SUIT.DIAMOND));
                        break;
                    case SUIT.HEART.value:
                        cards.push(new Card(j, SUIT.HEART));
                        break;
                    case SUIT.SPADE.value:
                        cards.push(new Card(j, SUIT.SPADE));
                        break;
                    }
                }
            }
        }
    }

    function shuffle(cards) {
        for (var i = 0; i < NUMBER_OF_SHUFFLES; ++i) {
            var fromIndex = Math.floor(Math.random() * DECK_SIZE);
            var toIndex = Math.floor(Math.random() * DECK_SIZE);

            var temp = cards[fromIndex];
            cards[fromIndex] = cards[toIndex];
            cards[toIndex] = temp;
        }

    }

    generateDeck(this.cards, numDecks || NUM_DECKS);
    shuffle(NUMBER_OF_SHUFFLES, this.cards);
};

Deck.prototype.dealCard = function() {
    var card = this.cards[0];
    this.cards.shift();
    return card;
};

Deck.prototype.cardsRemaining = function() {
    return this.cards.length;
};