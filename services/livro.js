const fs = require ("fs")
function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livro_filtrado = livros.filter(livro => livro.id === id)[0]
    return livro_filtrado
}
module.exports = {
    getTodosLivros,
    getLivroPorId
}