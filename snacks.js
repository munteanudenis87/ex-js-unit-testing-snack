function getInitials(fullName){
    const [nome, cognome] = fullName.split(" ").filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(str){
    if(!str){
        throw new Error('Non valido')
    }
    return str.toLowerCase().replaceAll(" ", "-");
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

module.exports = { getInitials, createSlug, average, isPalindrome }