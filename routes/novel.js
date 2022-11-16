var express = require('express');
const novel_controlers= require('../controllers/novel'); 
var router = express.Router();

/* GET home page. */

/* GET novels */
router.get('/', novel_controlers.novel_view_all_Page);

router.get('/detail', novel_controlers.novel_view_one_Page); 

router.get('/create', novel_controlers.novel_create_Page); 

router.get('/update', novel_controlers.novel_update_Page);

router.get('/delete', novel_controlers.novel_delete_Page);


module.exports = router;