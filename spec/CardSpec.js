describe("Test a card 'toString Works'", function() {
  var seven = new Card(7);
  var ten = new Card(10);
  var ace = new Card(1);
  var jack = new Card(11);
  var queen = new Card(12);
  var king = new Card(13);
  
  it("A numeric card can be created accurately.", function() {
    expect(seven.toString()).toBe('7');
  });
  
  it("A 10 card can be created accurately.", function() {
    expect(ten.toString()).toBe('10');
  });
  
  it("An A card can be created accurately.", function() {
    expect(ace.toString()).toBe('A');
  });
  
  it("A J card can be created accurately.", function() {
    expect(jack.toString()).toBe('J');
  });
  
  it("A Q card can be created accurately.", function() {
    expect(queen.toString()).toBe('Q');
  });
  
  it("A K card can be created accurately.", function() {
    expect(king.toString()).toBe('K');
  });
  
});

describe("Test a card can be retrieved correctly", function() {
    
    var ace = new Card(1);
    var seven = new Card(7);
    var jack = new Card(11);
    
    it("A numeric card can be created accurately.", function() {
        expect(seven.toString()).toBe('7');
    });
    
});