const { getInitials, createSlug, average, isPalindrome, findPostById } = require("./snacks.js");


describe('Manipolazione di Stringhe', () => {
    //  Snack 1
    test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
        expect(getInitials("Munteanu Denis")).toBe("M.D.");
    })
        //  Snack 5
    test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
        expect(isPalindrome("otto")).toBeTruthy();
        expect(isPalindrome("uno")).toBeFalsy();
    })
})

describe('Array', () => {
    //  Snack 3
    test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
        expect(average([5, 15])).toBe(10);       
    })
    //  Snack 7
    test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
        expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Post 2", slug: "Post-2" });
    })
})

describe( 'Slug', () => {
    //  Snack 2
    test('La funzione createSlug restituisce una stringa in lowercase.', () => {
        expect(createSlug("Restituisce uNa STRinga in loweRCase")).toBe("restituisce-una-stringa-in-lowercase");
    })
    //  Snack 4
    test('La funzione createSlug sostituisce gli spazi con -.', () => {
        expect(createSlug("sostituisce gli spazi con -")).toBe("sostituisce-gli-spazi-con--");
    })
    //  Snack 6
    test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
        expect(() => createSlug("")).toThrow('Non valido');
        expect(() => createSlug(null)).toThrow('Non valido');
    })
})

const posts = [
    { id: 1, title: "Post 1", slug: "Post-1" },
    { id: 2, title: "Post 2", slug: "Post-2" }
]

