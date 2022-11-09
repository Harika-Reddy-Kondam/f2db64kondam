var novel = require('../models/novel'); 
 
// List of all novels 
exports.novel_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: novel list'); 
}; 
 
// for a specific novel. 
exports.novel_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: novel detail: ' + req.params.id); 
}; 
 
// Handle novel create on POST. 
exports.novel_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: novel create POST'); 
}; 
 
// Handle novel delete form on DELETE. 
exports.novel_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: novel delete DELETE ' + req.params.id); 
}; 
 
// Handle novel update form on PUT. 
exports.novel_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: novel update PUT' + req.params.id); 
}; 