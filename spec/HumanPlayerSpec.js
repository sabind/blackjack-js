describe("Test a Human Player works.", function() {

    var player = new HumanPlayer();

    beforeEach(function() {
        player = new HumanPlayer();
    });

    afterEach(function() {
        player = new HumanPlayer();
    });

    it("Test a human player can receive cards.", function() {
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
    
    it("Test a human loses chips when he loses a hand.", function() {
        var seven = new Card(7, SUIT.HEART);
        var jack = new Card(11, SUIT.CLUB);
        player.dealCard(seven);
        player.dealCard(jack);
        player.buyIn(1000);
        player.betChips(100);
        player.loseBet();
        expect(player.chipCount()).toBe(900);
    });
    
    it("Test a human wins 2x chips when he wins a hand.", function() {
        var seven = new Card(7, SUIT.HEART);
        var jack = new Card(11, SUIT.CLUB);
        player.dealCard(seven);
        player.dealCard(jack);
        player.buyIn(1000);
        player.betChips(100);
        player.winBet();
        expect(player.chipCount()).toBe(1100);
    });
});