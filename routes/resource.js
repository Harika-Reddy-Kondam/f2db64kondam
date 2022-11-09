var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var novel_controller = require('../controllers/novel'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// novel ROUTES /// 
 
// POST request for creating a novel.  
router.post('/novel', novel_controller.novel_create_post); 
 
// DELETE request to delete novel. 
router.delete('/novel/:id', novel_controller.novel_delete); 
 
// PUT request to update novel. 
router.put('/novel/:id', novel_controller.novel_update_put); 
 
// GET request for one novel. 
router.get('/novel/:id', novel_controller.novel_detail); 
 
// GET request for list of all novel items. 
router.get('/novel', novel_controller.novel_list); 
 
module.exports = router; 