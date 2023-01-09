
var express = require('express')
var router = express.Router()
const { getPosts,getPost, createPost, updatePost,  deletePost,getPostsBySearch} =require('../controller/ideas-controller/ideaspost');
router.get('/ideas/search', getPostsBySearch);
router.get('/ideas', getPosts);
router.get('/ideas/:id', getPost);

router.post('/ideas',   createPost);
router.patch('/ideas/:id',  updatePost);
router.delete('/ideas/:id',  deletePost);
module.exports=router