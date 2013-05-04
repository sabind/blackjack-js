describe("Test a cards work:", function() {
  var card;

  it("A card can be created.", function() {
    card = new Card(7);
    var acesLow = true;
    
    expect(card.value(acesLow)).toBe(7);
  });
  
});