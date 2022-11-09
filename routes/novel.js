var express = require('express');
const novel_controlers= require('../controllers/novel'); 
var router = express.Router();

router.get('/', novel_controlers.novel_view_all_Page ); 
module.exports = router;