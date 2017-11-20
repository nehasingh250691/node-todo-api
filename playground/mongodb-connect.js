//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB Server', err);
    }
    console.log('Connected to MongoDB Server!');

    //insert a document in Todos collection
    db.collection('Todos').insertOne({
        completed: false,
        text: 'Something to do'
    }, (err, result) => {
        if(err){
            return console.log('Unable to save todo', err);
        }
        console.log('Todo saved.')
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    //insert a document in Users collection
    db.collection('Users').insertOne({
        //_id:123, // we can also explicity set the document _id, if we dont want it to be created by mongodb
        name:'Neha',
        age:25,
        location:'Gurgaon'
    }, (err, result) => {
        if(err){
            return console.log('Unable to save User ', err);
        }
        console.log('User saved!')
        console.log(JSON.stringify(result.ops,undefined,2));
        // _Id : 12 bytes (4 bytes- timestamp, 3 bytes - machine id, 3 bytes - process id, 3 bytes - counter)
        //way to fetch the Timestamp from _id of a document(an instance of constructor function ObjectID)
        console.log(result.ops[0]._id.getTimestamp()); 
    })

    db.close();
});