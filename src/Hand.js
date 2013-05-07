function Hand() {
    this.cards = [];
}

Hand.prototype.count = function() {
    return this.cards.length;
};

Hand.prototype.addCard = function(card) {
	this.cards.push(card);
};

Hand.prototype.toString = function() {
    var revealFirst = "";
    
    if (this.isEmpty()) {
		return "Empty Hand";
	} else {
		this.cards.forEach(function(card){
            revealFirst += card.toString() + " ";
        });

		return revealFirst.trim();
	}    
};

Hand.prototype.toStringPreview = function() {
    var revealFirst = "";
    var firstCard = true;
    
    if (this.isEmpty()) {
    	return "Empty Hand";
	} else {
		this.cards.forEach(function(card){
            if (firstCard) {
                revealFirst += card.toString() + " ";
                firstCard = false;
            } else {
                revealFirst += "X";
            }
        });

		return revealFirst.trim();
	}    
};

Hand.prototype.totalHandValue = function() {
    var sum = 0;
    var hasAces =false;
    
	this.cards.forEach(function(card) {
		if (card.value === 1) {
			hasAces = true;
		}
		sum += card.valueLow();
	});

//We don't have to keep track of all the aces. Two aces evaluated at 11 makes the count 22 so 
//we only actually need to evaluate the hand as aces low every time and if he did bumb across 
//an ace see if adding 20 helps the player. If it pushes them over 21 then leave all aces as 1.

	if (hasAces && (sum + 10) <= 21) {
		return sum + 10;
	} else {
		return sum;
	}
};


Hand.prototype.clear = function() {
    this.cards = [];
};

Hand.prototype.isEmpty = function() {
    return this.cards.length === 0;
};

Hand.prototype.cardTotal = function() {
    return this.cards.length;
};