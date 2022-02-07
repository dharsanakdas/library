const Mongoose=require("mongoose");
const CONSTANTS=require("./../../shared/constants");
const schema=Mongoose.Schema({
    Book_Title: String, 
    Author:String, 
    Language:String, 
    Brief_Description:String 
})

module.exports = Mongoose.model(CONSTANTS.BOOKS_COLLECTION_NAME, schema);
