const mongoose = require("mongoose") 
const novelSchema = mongoose.Schema({ 
    novelName: String, 
    novelCost: Number, 
    novelAuthor: String 
}) 
 
module.exports = mongoose.model("Novel", 
novelSchema) 