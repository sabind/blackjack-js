describe("Test a Computer Dealer works.", function() {

    var dealer = new ComputerDealer();

    beforeEach(function() {
        dealer = new ComputerDealer();
    });

    afterEach(function() {
        dealer = new ComputerDealer();
    });

    it("Test a dealer can receive cards.", function() {
        var seven = new Card(7, SUIT.HEART);
        var jack = new Card(11, SUIT.CLUB);
        dealer.dealCard(seven);
        dealer.dealCard(jack);
        expect(dealer.handValue()).toBe(17);
        expect(dealer.handString()).toBe("7H JC");
        expect(dealer.topCardOnlyString()).toBe("7H X");
        expect(dealer.isHandEmpty()).toBe(false);
        expect(dealer.getNumberOfCardsInHand()).toBe(2);
    });
    
    it("Test a dealer will 'need' cards below 17.", function() {
        var seven = new Card(7, SUIT.HEART);
        var nine = new Card(9, SUIT.CLUB);
        dealer.dealCard(seven);
        dealer.dealCard(nine);
        expect(dealer.needsMoreCards()).toBe(true);
    });
    
    it("Test a dealer will not 'need' cards at 17.", function() {
        var seven = new Card(7, SUIT.HEART);
        var ten = new Card(10, SUIT.CLUB);
        dealer.dealCard(seven);
        dealer.dealCard(ten);
        expect(dealer.needsMoreCards()).toBe(false);
    });
    
    it("Test a dealer will not 'need' cards above 17 (Ace + 7).", function() {
        var seven = new Card(7, SUIT.HEART);
        var ace = new Card(1, SUIT.CLUB);
        dealer.dealCard(seven);
        dealer.dealCard(ace);
        expect(dealer.needsMoreCards()).toBe(false);
    });
    
    it("Test a dealer will not 'need' cards above 17 (Jack + 9).", function() {
        var nine = new Card(9, SUIT.HEART);
        var jack = new Card(11, SUIT.CLUB);
        dealer.dealCard(nine);
        dealer.dealCard(jack);
        expect(dealer.needsMoreCards()).toBe(false);
    });
});