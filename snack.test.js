const { getInitials, createSlug } = require("./snacks.js");

//  Snack 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Munteanu Denis")).toBe("M.D.");
})

//  Snack 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Restituisce uNa STRinga in loweRCase")).toBe("restituisce una stringa in lowercase");
})