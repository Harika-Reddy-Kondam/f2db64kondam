var novel = require('../models/novel'); 
 
// List of all novels 
// List of all novel 
exports.novel_list = async function(req, res) { 
    try{ 
        thenovel = await novel.find(); 
        res.send(thenovel); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific novel. 
exports.novel_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: novel detail: ' + req.params.id); 
}; 
 
// Handle novel create on POST.  
exports.novel_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new novel(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.novelName = req.body.novelName; 
    document.novelCost = req.body.novelCost; 
    document.novelAuthor = req.body.novelAuthor; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle novel delete form on DELETE. 
exports.novel_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: novel delete DELETE ' + req.params.id); 
}; 
 
// Handle novel update form on PUT. 
exports.novel_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: novel update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.novel_view_all_Page = async function(req, res) { 
    try{ 
        thenovel = await novel.find(); 
        res.render('novel', { title: 'novel Search Results', results: thenovel }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 