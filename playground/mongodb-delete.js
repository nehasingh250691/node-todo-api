//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB Server', err);
    }
    console.log('Connected to MongoDB Server!');

    //delete documents from Todos collection
    //deleteMany
    db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result) => {
        console.log(result);
    },(err) =>{
        console.log('Unable to delete documents from Todos');
    });
    //deleteOne
    db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
        console.log(result);
    });
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed:true}).then((result) =>{
        console.log(JSON.stringify(result,undefined,2));
    });

    //delete documents from Users collection
    db.collection('Users').deleteMany({name:'Neha'});

    db.collection('Users')
    .findOneAndDelete({_id:new ObjectID('5a12e4d062952191f4955653')})
    .then((result) => {
        console.log(JSON.stringify(result,undefined,2));
    });

    //db.close();
});