const {Router} = require('express')

const router = Router()

router.get('/', (req, res)=>{
    res.send('Olá Mundo! Tudo bem?')
})

module.exports = router
