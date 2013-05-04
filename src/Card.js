function Card (value, suit) {
    this.suit = suit;
    this.value = value;
    
    var SUIT = {
        HEART : {value: 0, name: "heart", code: "H"}, 
        CLUB: {value: 1, name: "club", code: "C"}, 
        SPADE : {value: 2, name: "spade", code: "S"},
        DIAMOND : {value: 3, name: "diamond", code: "D"}
    };
    Object.freeze(SUIT);
    
    value = function(acesLow) {
    if (this.value == 1) 
    {
        if (acesLow) 
        {
            return 1;
        } 
        else 
        {
            return 11;
        }
    } 
    else 
    {
        if (this.value > 10)
        {
            return 10;
        }
        else 
        {
            return this.value;
        }
    }
};
}

Card.prototype.isAce = function() {
    return this.value == 1;
};

Card.prototype.toString = function() {
    if (this.value == 1) {
        return "A";
    }
	else if (this.value > 1 && this.value < 11) {
        return "" + this.value; // Concatenating an empty string to something calls toString()
	}
	else if (this.value == 11) 
    {
		return "J";
    }
    else if (this.value == 12) {
        return "Q";
	}
    else if (this.value == 13) {
        return "K";
	}
    else 
    {
        return "NaC"; //Not a Card
    }
};