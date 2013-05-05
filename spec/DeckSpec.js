describe("Test a deck works.", function() {

    var deck = new Deck();

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
    
    
});