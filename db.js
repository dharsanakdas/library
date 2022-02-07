let MongoClient = require('mongodb').MongoClient;
let Mongoose=require("mongoose");
const CONSTANTS=require("./../shared/constants");

createConnection();

function createConnection(){
  Mongoose.connect(CONSTANTS.URL,{useNewUrlParser:true}).then(()=>{
    console.log("mongoose connected");
  })
}

 

module.exports={createConnection};