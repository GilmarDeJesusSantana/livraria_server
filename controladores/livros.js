function getLivros (req, res){
    try{
        res.send('Olá Mundo! Tudo bem?')
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}
module.exports = {
    getLivros
}