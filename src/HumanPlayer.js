var HumanPlayer = function(name) {   
    this.name = name;
    this.hand = new Hand();
    this.chips = 0;
    this.chipsInPlay = 0;
};

HumanPlayer.prototype = new Player();

HumanPlayer.prototype.buyIn = function(chipsIn) {
    this.chips += chipsIn;
};

HumanPlayer.prototype.chipCount = function() {
    return this.chips + this.chipsInPlay;
};

HumanPlayer.prototype.betChips = function(chipsToBet) {
    if (chipsToBet > this.chips) {
        this.chipsInplay += this.chips;
        this.chips = 0;
    } else {
        this.chips -= chipsToBet;
        this.chipsInPlay += chipsToBet;
    }
};

HumanPlayer.prototype.loseBet = function () {
    this.chipsInPlay = 0;
};

HumanPlayer.prototype.winBet = function () {
    this.chips += 2 * this.chipsInPlay;
    this.chipsInPlay = 0;
};