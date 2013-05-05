describe("Test a hand works.", function() {

	var hand = new Hand();

    beforeEach(function() {
        hand = new Hand();
    });

    afterEach(function() {
        hand = new Hand();
    });
    
	it("The hand can have cards added to it", function () {
		var seven = new Card(7, SUIT.HEART);
        hand.addCard(seven);
		expect(hand.count()).toBe(1);
	});
    
    it("The hand canshow you the cards it has.", function () {
    	var seven = new Card(7, SUIT.HEART);
        var ace = new Card(1, SUIT.HEART);
        hand.addCard(seven);
        hand.addCard(ace);
		expect(hand.count()).toBe(2);
        expect(hand.toString()).toBe("7 H A H");
	});
});