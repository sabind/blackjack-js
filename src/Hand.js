function Hand() {
	this.cards = [];
}

Hand.prototype.count = function() {
    return this.cards.length;
};

Hand.prototype.addCard = function(card) {
	this.cards.push(card);
};

Hand.prototype.clear = function() {
    this.cards = [];
};

Hand.prototype.isEmpty = function() {
    return this.cards.length() === 0;
};