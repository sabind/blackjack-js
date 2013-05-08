var ComputerDealer = function(name, numDecks) {
    this.name = name;
    this.deck = new Deck(numDecks);
    this.hand = new Hand();
};

ComputerDealer.prototype = new Player();

ComputerDealer.prototype.grabCardFromDeck = function () {
    return this.deck.dealCard();
};

ComputerDealer.prototype.needsMoreCards = function () {
    return this.handValue() < 17;
};