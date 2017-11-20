//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB Server', err);
    }
    console.log('Connected to MongoDB Server!');

    //update Todos collection document
    db.collection('Todos').findOneAndUpdate({
        _id:new ObjectID('5a12edf362952191f49558ec')
    },{
        $set : {
            completed:true
        }
    },{
        returnOriginal:false
    })
    .then((result) =>{
        console.log(JSON.stringify(result,undefined,2))
    });

    //update Users collection document
    db.collection('Users').findOneAndUpdate({
        _id:new ObjectID('5a12e48b62952191f4955638')
    },{
        $set : {
            name:'Neha'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    })
    .then((result) =>{
        console.log(JSON.stringify(result,undefined,2))
    });

    //db.close();
});