function getInitials(fullName){
    const [nome, cognome] = fullName.split(" ").filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(str, posts){
    if(!str){
        throw new Error('Non valido')
    }
    let slug = str.toLowerCase().replaceAll(" ", "-");
    if(posts){
        for(let i=0; i<posts.length; i++){
            const post = posts[i];
            if(post.slug === slug){
                return slug + '-1';
            }
        }
    }
    return slug;
}

function average(num){
    let somma = 0;
    num.forEach(n => {
        somma += n;
    });
    return somma / num.length;
}
function isPalindrome(parola){
    const parolaInv = parola.trim().split('').reverse().join('');
    return parola.trim() === parolaInv;
}

function findPostById(posts, id){
    return posts.find(post => post.id === id);
}

function addPost(posts, post){
    const ids = posts.map(post => post.id);
    const slugs = posts.map(post => post.slug);
    if(ids.includes(post.id)){
        throw new Error('Id gia esistente');
    }
    if(slugs.includes(post.slug)){
        throw new Error('Slug gia esistente');
    }
    posts.push(post);
}

function removePost(posts, id){
    const index = posts.findIndex(post => post.id === id);
    posts.splice(index, 1);
}

module.exports = { getInitials, createSlug, average, isPalindrome, findPostById, addPost, removePost }