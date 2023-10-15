const {Router} = require('express')
const router = Router()
const {getLivros} = require('../controladores/livros')
router.get('/', getLivros)

router.post('/', (req, res)=>{
    res.send('Você fez uma requisição do tipo POST.')
})

router.patch('/', (req, res)=>{
    res.send('Você fez uma requisição do tipo Patch.')
})

router.delete('/', (req, res)=>{
    res.send('Você fez uma requisição do tipo Delete.')
})

module.exports = router
