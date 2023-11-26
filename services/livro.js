const fs = require ("fs")
function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livro_filtrado = livros.filter(livro => livro.id === id)[0]
    return livro_filtrado
}

function insere_livro(livro_novo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const nova_lista_de_livros = [...livros, livro_novo]
    fs.writeFileSync("livros.json", JSON.stringify(nova_lista_de_livros))
}

function modifica_livro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indice_modificado = livrosAtuais.findIndex(livro => livro.id ===id )
    const conteudo_mudado = {...livrosAtuais[indice_modificado],...modificacoes}
    livrosAtuais[indice_modificado] = conteudo_mudado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function eliminar_livro(id){
    let livros_atualis = JSON.parse(fs.readFileSync("livros.json"))
    const indice_deletar = livros_atualis.findIndex(livro => livro.id === id)
    delete livros_atualis[indice_deletar]
    fs.writeFileSync("livros.json", JSON.stringify(livros_atualis))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insere_livro,
    modifica_livro,
    eliminar_livro
}