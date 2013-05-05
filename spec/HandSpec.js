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
    
    it("The hand can show you the cards it has.", function () {
    	var seven = new Card(7, SUIT.HEART);
        var ace = new Card(1, SUIT.HEART);
        hand.addCard(seven);
        hand.addCard(ace);
		expect(hand.count()).toBe(2);
        expect(hand.toString()).toBe("7H AH");
	});
    
    it("The hand can preview the first card it has as well as hide the second.", function () {
        var seven = new Card(7, SUIT.HEART);
        var ace = new Card(1, SUIT.HEART);
        hand.addCard(seven);
        hand.addCard(ace);
		expect(hand.count()).toBe(2);
        expect(hand.toStringPreview()).toBe("7H X");
	});
});

describe("Test a hand can sum cards correctly.", function() {
    var hand = new Hand();
    
    beforeEach(function() {
        hand = new Hand();
    });

    afterEach(function() {
        hand = new Hand();
    });
    
    it("7 and 7 = 14", function () {
       var seven = new Card(7, SUIT.CLUB);
       var seven2 = new Card(7, SUIT.DIAMOND);
       
       hand.addCard(seven);
       hand.addCard(seven2);
       
       expect(hand.count()).toBe(2);
       expect(hand.totalHandValue()).toBe(14);
    });
    
    it("7 and 10 = 17", function () {
       var seven = new Card(7, SUIT.CLUB);
       var ten = new Card(10, SUIT.DIAMOND);
       
       hand.addCard(seven);
       hand.addCard(ten);
       
       expect(hand.count()).toBe(2);
       expect(hand.totalHandValue()).toBe(17);
    });
    
    it("7 and Q = 17", function () {
       var seven = new Card(7, SUIT.CLUB);
       var queen = new Card(12, SUIT.DIAMOND);
       
       hand.addCard(seven);
       hand.addCard(queen);
       
       expect(hand.count()).toBe(2);
       expect(hand.totalHandValue()).toBe(17);
    });
    
    it("7 and A = 18", function () {
       var seven = new Card(7, SUIT.CLUB);
       var ace = new Card(1, SUIT.DIAMOND);
       
       hand.addCard(seven);
       hand.addCard(ace);
       
       expect(hand.count()).toBe(2);
       expect(hand.totalHandValue()).toBe(18);
    });
    
    it("7 and A and A = 19", function () {
       var seven = new Card(7, SUIT.CLUB);
       var ace = new Card(1, SUIT.DIAMOND);
       
       hand.addCard(seven);
       hand.addCard(ace);
       hand.addCard(ace);
       
       expect(hand.count()).toBe(3);
       expect(hand.totalHandValue()).toBe(19);
    });
    
    it("J and A and A = 12", function () {
       var jack = new Card(11, SUIT.CLUB);
       var ace = new Card(1, SUIT.DIAMOND);
       
       hand.addCard(jack);
       hand.addCard(ace);
       hand.addCard(ace);
       
       expect(hand.count()).toBe(3);
       expect(hand.totalHandValue()).toBe(12);
    });
});