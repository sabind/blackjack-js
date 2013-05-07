function Player(name) {
    this.name = name;
    this.hand = new Hand();
}

Player.prototype.handValue = function() {
    return this.hand.totalHandValue();
};

Player.prototype.tossHand = function() {
    this.hand.clear();
};

Player.prototype.handString = function() {
    return this.hand.toString();
};

Player.prototype.topCardOnlyString = function() {
    return this.hand.toStringPreview();
};

Player.prototype.isHandEmpty = function() {
    return this.hand.isEmpty();
};

Player.prototype.getNumberOfCardsInHand = function() {
    return this.hand.cardTotal();
};

Player.prototype.dealCard = function(card) {
    this.hand.addCard(card);
}