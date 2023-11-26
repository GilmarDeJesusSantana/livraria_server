const { json } = require("express")
const fs = require("fs")
const { getTodosLivros, getLivroPorId, insere_livro, modifica_livro, eliminar_livro} = require("../services/livro")
function getLivros (req, res){
    try{
        const livros = getTodosLivros()
        res.send(livros)
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res){
    try{
        const id = req.params.id
        if(id && Number(id)){
            const livro = getLivroPorId(id)
            res.send(livro)
        }else{
            res.status(422)
            res.send("ID Inválido.")
        }
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res){
    try{
        const livro_novo = req.body
        if(req.body.nome){
            insere_livro(livro_novo)
            res.status(201)
            res.send("Livro inserido com sucesso.")
        }else{
            res.status(422)
            res.send("Campo nome é obrigatório.")
        }


    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patch_livro(req, res){
    try{
        const id = req.params.id
        if (id && Number(id)){
            const body = req.body
            modifica_livro(body, id)
            res.send("Item mpodificado com sucesso.")
        }else{
            res.status(422)
            res.send("ID Inválido.")
        }
    }catch(error){
        res.status(500)
        res.send(error.message)
    }

}

function delete_livro(req, res){
    try{
        const id = req.params.id
        if (id && Number(id)){
            eliminar_livro(id)
            res.send("Item deletado com sucesso.")
        }else{
            res.status(422)
            res.send("ID Inválido.")
        }
    }catch(error){
        res.status(500)
        res.send(error.message)
    }

}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patch_livro,
    delete_livro
}