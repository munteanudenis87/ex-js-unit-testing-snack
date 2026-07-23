function getInitials(fullName){
    const [nome, cognome] = fullName.split(" ").filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(str){
    return str.toLowerCase().replaceAll(" ", "-");
}

function average(num){
    let somma = 0;
    num.forEach(n => {
        somma += n;
    });
    return somma / num.length;
}

module.exports = { getInitials, createSlug, average }