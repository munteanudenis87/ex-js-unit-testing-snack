const { getInitials, createSlug, average, isPalindrome } = require("./snacks.js");

//  Snack 1
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Munteanu Denis")).toBe("M.D.");
})

//  Snack 2
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Restituisce uNa STRinga in loweRCase")).toBe("restituisce-una-stringa-in-lowercase");
})

//  Snack 3
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([5, 15])).toBe(10);
})

//  Snack 4
test('La funzione createSlug sostituisce gli spazi con -.', () => {
    expect(createSlug("sostituisce gli spazi con -")).toBe("sostituisce-gli-spazi-con--");
})

//  Snack 5
test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome("otto")).toBeTruthy();
    expect(isPalindrome("uno")).toBeFalsy();
})