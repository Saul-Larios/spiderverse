const TSpiderman = require("../app/Tspiderman")

describe("Unit Tests for Spiderman class", () =>{
    test('2) Use the method getInfo', () =>{
        const tomHolland = new TSpiderman("Spiderman Marvel",25,"Tom Holland", 5, "Marvel")
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")

    });
})