function getInitials(fullName){
    const [nome, cognome] = fullName.split(" ").filter(str => str !== '');
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`;
}

function createSlug(str){
    return str.toLowerCase();
}

module.exports = { getInitials, createSlug }