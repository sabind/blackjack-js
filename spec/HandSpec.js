describe("Test a hand works.", function() {

	var hand = new Hand();

	it("The hand can have cards added to it", function () {
		var card = new Card(7, SUIT.HEART);
        hand.addCard(card);
		expect(hand.count()).toBe(1);
	});
});