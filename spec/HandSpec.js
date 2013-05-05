describe("Test a hand works.", function() {

	var hand = new Hand();

	it("The hand can have cards added to it", function () {
		hand.addCard(new Card(7));
		expect(hand.count()).toBe(1);
	});
});