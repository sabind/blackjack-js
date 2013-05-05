function Hand() {
	this.cards = new Array();
};

Hand.prototype.count = function() {
    this.cards.length;
};

Hand.prototype.addCard = function(card) {
	this.cards[this.count] = card;
};