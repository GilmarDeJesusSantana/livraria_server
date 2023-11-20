const fs = require("fs")
//Leitura de arquivo Json
const dados_atuais = JSON.parse(fs.readFileSync("livros.json" ))
console.log(dados_atuais)

const novo_livro = {id : '3', nome : 'Novo Livro'}
fs.writeFileSync("livros.json", JSON.stringify([...dados_atuais, novo_livro]))
const novos_dados_atuais = JSON.parse(fs.readFileSync("livros.json" ))
console.log(novos_dados_atuais)
