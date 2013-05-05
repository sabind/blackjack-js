describe("Test a deck works.", function() {

    var deck = new Deck();
    
    var testDeckForCompleteness = function(deck) {
        var threeCount = 0;
    	var jackCount = 0;
		var aceCount = 0;

		for (var i = 0; i < DECK_SIZE; i++)
		{
			var card = deck.dealCard();
			if (card.toString().equals("3")) {
				threeCount++;
			}
			if (card.toString().equals("J")) {
				jackCount++; 
			}
			if (card.toString().equals("A")) {
				aceCount++;
			}
		}
		return threeCount === NUMBER_OF_SUITS && jackCount === NUMBER_OF_SUITS && aceCount === NUMBER_OF_SUITS; 
    };

    beforeEach(function() {
        deck = new Deck();
    });

    afterEach(function() {
        deck = new Deck();
    });
    
	it("A new deck has the right number of cards in it.", function () {
		expect(deck.cardsRemaining()).toBe(52);
	});
    
    it("The a deck subtracts cards it deals out.", function () {
    	deck.dealCard();
        expect(deck.cardsRemaining()).toBe(51);
        deck.dealCard();
        expect(deck.cardsRemaining()).toBe(50);
        deck.dealCard();
        expect(deck.cardsRemaining()).toBe(49);
	});
    
    it("A new deck has the right number of cards in it.", function () {
		expect(testDeckForCompleteness(deck)).toBe(true);
	});
    
});