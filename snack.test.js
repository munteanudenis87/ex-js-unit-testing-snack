const { getInitials, createSlug, average } = require("./snacks.js");

//  Snack 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Munteanu Denis")).toBe("M.D.");
})

//  Snack 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Restituisce uNa STRinga in loweRCase")).toBe("restituisce una stringa in lowercase");
})

//  Snack 3
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([5, 15])).toBe(10);
})