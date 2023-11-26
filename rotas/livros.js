const {Router} = require('express')
const router = Router()
const {getLivros, getLivro, postLivro, patch_livro, delete_livro} = require('../controladores/livros')
router.get('/', getLivros)
router.get('/:id', getLivro)

router.post('/', postLivro)

router.patch('/:id', patch_livro)

router.delete('/:id', delete_livro)

module.exports = router
