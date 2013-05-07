describe("Test a Player works.", function() {

    var player = new Player();

    beforeEach(function() {
        player = new Player();
    });

    afterEach(function() {
        player = new Player();
    });

    it("The player can receive a card.", function() {
        var seven = new Card(7, SUIT.HEART);
        player.dealCard(seven);
        expect(player.handValue()).toBe(7);
        expect(player.handString()).toBe("7H");
        expect(player.topCardOnlyString()).toBe("7H");
        expect(player.isHandEmpty()).toBe(false);
        expect(player.getNumberOfCardsInHand()).toBe(1);
    });
    
    it("The player can receive two cards.", function() {
        var seven = new Card(7, SUIT.HEART);
        var jack = new Card(11, SUIT.CLUB);
        player.dealCard(seven);
        player.dealCard(jack);
        expect(player.handValue()).toBe(17);
        expect(player.handString()).toBe("7H JC");
        expect(player.topCardOnlyString()).toBe("7H X");
        expect(player.isHandEmpty()).toBe(false);
        expect(player.getNumberOfCardsInHand()).toBe(2);
    });
});