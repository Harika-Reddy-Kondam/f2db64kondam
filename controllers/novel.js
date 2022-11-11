var novel = require('../models/novel'); 
 
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
exports.novel_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await novel.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
};  
 
// Handle novel create on POST.  
exports.novel_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new novel(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"novelName":"goat", "novelCost":12, "novelAuthor":"large"} 
    document.novelName = req.body.novelName; 
    document.novelnovelCost = req.body.novelnovelCost; 
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
exports.novel_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
        try { 
            let toUpdate = await novel.findById( req.params.id) 
            // Do updates of properties 
            if(req.body.novelName)  
                   toUpdate.novelName = req.body.novelName; 
            if(req.body.novelCost) toUpdate.novelCost = req.body.novelCost; 
            if(req.body.novelAuthor) toUpdate.novelAuthor = req.body.novelAuthor; 
            let result = await toUpdate.save(); 
            console.log("Sucess " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`); 
        } 
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