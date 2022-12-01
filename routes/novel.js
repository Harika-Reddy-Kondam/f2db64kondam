var express = require('express');
const novel_controlers= require('../controllers/novel'); 
var router = express.Router();
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET home page. */

/* GET novels */
router.get('/', novel_controlers.novel_view_all_Page);

router.get('/detail', novel_controlers.novel_view_one_Page); 

router.get('/create',secured, novel_controlers.novel_create_Page); 

router.get('/update',secured, novel_controlers.novel_update_Page);

router.get('/delete',secured, novel_controlers.novel_delete_Page);


module.exports = router;