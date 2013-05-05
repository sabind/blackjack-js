function Hand() {
	this.cards = [];
};

Hand.prototype.addCard = function(card) {
	this.cards += card;
};

Hand.prototype.count = function() {
	this.cards.length();
};