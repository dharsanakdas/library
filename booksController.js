let MongoClient = require("mongodb").MongoClient;
let mongoose = require("mongoose");

const Books = require("./../database/models/booksSchema");

function insertBooks(req, res) {
    //console.log(req);
    const books = new Books(req.body.args);
    books.save().then((result) => {
        res.json(result);
    });
}

function findBooks(req, res) {
    let title=req.body.args.title;    
    Books.find({Book_Title:title}).then((bookSearchResult) => {
        res.send(bookSearchResult);
    }).catch((error) => {
        res.send(error);
    })
}

function editBook(req,res){
    let title=req.body.args.Book_Title;
    // let author=req.body.Author;
    // let Language=req.body.Language;
    // let Brief_Description=req.body.Brief_Description;

    let detailsToBeEdited=req.body.args;

    Books.updateOne({Book_Title:title},{$set:detailsToBeEdited}).then((result)=>{
        console.log(result);
        if(result.modifiedCount==1){
            res.send("edited successfully");
        }
        else{
            res.send("no data found");
        }
    }).catch((error)=>{
        console.log(error);
    });
}

function deleteBook(req,res){
    let title=req.body.args.Book_Title;
    Books.deleteOne({Book_Title:title}).then((result)=>{
        console.log(result);
        res.send("deleted successfully")
    }).catch((error)=>{
        res.send(error);
    })
}

module.exports = {
    insertBooks,
    findBooks,
    editBook,
    deleteBook
};