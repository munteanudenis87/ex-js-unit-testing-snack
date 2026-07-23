const { getInitials, createSlug, average, isPalindrome, findPostById, addPost, removePost } = require("./snacks.js");


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


    let posts;

    beforeEach(() => {
        posts = [
            { id: 1, title: "Post 1", slug: "post-1" },
            { id: 2, title: "Post 2", slug: "post-2" }
        ];
    });

describe('Array', () => {
    //  Snack 3
    test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
        expect(average([5, 15])).toBe(10);       
    })

    //  Snack 7
    test('La funzione findPostById restituisce il post corretto dato l\'array di post e l\'id', () => {
        expect(findPostById(posts, 2)).toEqual({ id: 2, title: "Post 2", slug: "post-2" });
    })

    //  Snack 8 Bonus
    test('Dopo aver aggiunto un post con la funzione addPost, l\'array posts deve contenere un elemento in più.', () => {
        addPost(posts, { id: 3, title: "Post 3", slug: "Post-3" });
        expect(posts).toHaveLength(3);
    })
    test('Dopo aver rimosso un post con la funzione removePost, l\'array posts deve contenere un elemento in meno.', () => {
        removePost(posts, 2);
        expect(posts).toHaveLength(1);
    })

    //  Snack 9 Bonus
    test('Se si tenta di aggiungere un post con un id o uno slug già esistente, la funzione addPost deve lanciare un errore.', () => {
        expect(() => addPost(posts, { id: 2, title: "Post 3", slug: "post-3" })).toThrow('Id gia esistente');
        expect(() => addPost(posts, { id: 3, title: "Post 2", slug: "post-2" })).toThrow('Slug gia esistente');
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
    //  Snack 10 Bonus
    test('Se viene passato un array di post come secondo argomento, la funzione createSlug incrementa di 1 se lo slug esiste già.', () => {
        expect(createSlug("Post 2", posts)).toBe("post-2-1");
    })
})



