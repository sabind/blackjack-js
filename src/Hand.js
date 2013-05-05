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
    if (this.isEmpty()) {
		return "Empty Hand";
	} else {
		var revealFirst = this.cards[0].toString() + " ";

		this.cards.every(function(card){
            revealFirst += card.toString();
        });

		return revealFirst.trim();
	}    
};

Hand.prototype.clear = function() {
    this.cards = [];
};

Hand.prototype.isEmpty = function() {
    return this.cards.length === 0;
};