var ComputerDealer = function(name, numDecks) {
    this.name = name;
    this.deck = new Deck(numDecks);
};

ComputerDealer.prototype = new Player();

ComputerDealer.prototype.dealCard = function () {
    return 
}