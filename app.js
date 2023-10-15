const express = require('express') 
const rotalivro = require('./rotas/livros')
const app = express()
const port = 8000

app.use('/livros', rotalivro)

app.listen(port,()=>{
    console.log(`Escutando a porta ${port}`)
})