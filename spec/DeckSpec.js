describe("Test a deck works.", function() {

    var deck = new Deck();

    beforeEach(function() {
        deck = new Deck();
    });

    afterEach(function() {
        deck = new Deck();
    });
    
	it("The a new deck has the right number of cards in it.", function () {
		expect(deck.cardsRemaining()).toBe(52);
	});
});