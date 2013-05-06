var SUIT = {
    HEART: {
        value: 0,
        name: "heart",
        code: "H"
    },
    CLUB: {
        value: 1,
        name: "club",
        code: "C"
    },
    SPADE: {
        value: 2,
        name: "spade",
        code: "S"
    },
    DIAMOND: {
        value: 3,
        name: "diamond",
        code: "D"
    }
};
Object.freeze(SUIT);

var NUMBER_OF_SUITS = 4;

function Card(value, suit) {
    switch (suit) {
    case SUIT.CLUB:
        this.suit = SUIT.CLUB;
        break;
    case SUIT.DIAMOND:
        this.suit = SUIT.DIAMOND;
        break;
    case SUIT.HEART:
        this.suit = SUIT.HEART;
        break;
    case SUIT.SPADE:
        this.suit = SUIT.SPADE;
        break;
    }

    this.value = value;
}

Card.prototype.isAce = function() {
    return this.value == 1;
};

Card.prototype.toString = function() {
    if (this.value == 1) {
        return "A" + this.suit.code;
    }
    else if (this.value > 1 && this.value < 11) {
        return this.value + "" + this.suit.code; // Concatenating an empty string to something calls toString()
    }
    else if (this.value == 11) {
        return "J" + this.suit.code;
    }
    else if (this.value == 12) {
        return "Q" + this.suit.code;
    }
    else if (this.value == 13) {
        return "K" + this.suit.code;
    }
    else {
        return "NaC"; //Not a Card
    }
};

Card.prototype.valueHigh = function() {
    if (this.value == 1) {
        return 11;
    }
    else {
        if (this.value > 10) {
            return 10;
        }
        else {
            return this.value;
        }
    }
};

Card.prototype.valueLow = function() {
    if (this.value == 1) {
        return 1;
    }
    else {
        if (this.value > 10) {
            return 10;
        }
        else {
            return this.value;
        }
    }
};