const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/article');

router.get('/', articleCtrl.getAllArticle);
router.get('/:id', articleCtrl.getOneArticle);
router.post('/', articleCtrl.createArticle);
router.put('/:id', articleCtrl.updateArticle);
router.delete('/:id', articleCtrl.deleteArticle)

module.exports = router;
