const {Router} = require('express')

const router = Router()

router.get('/', (req, res)=>{
    res.send('Olá Mundo! Tudo bem?')
})

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
