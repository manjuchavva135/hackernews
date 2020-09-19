const express = require('express');
const router = express.Router();

const news_controller = require('../controllers/news');


// a simple test 
router.get('/test', news_controller.test);
//to create
router.post('/create', news_controller.news_create);
//to view
router.get('/:id', news_controller.news_details);
//to update
router.put('/:id/update', news_controller.news_update);
//to delete
router.delete('/:id/delete', news_controller.news_delete);

module.exports = router;