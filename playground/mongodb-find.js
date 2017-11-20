//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB Server', err);
    }
    console.log('Connected to MongoDB Server!');

    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos count: ${count}`);
    }, (err) => {
        if(err){
            console.log('Unable to fetch todos ', err);
        }
    });

    db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
        console.log('Todos which are not completed ');
        console.log(JSON.stringify(docs, undefined,2));
    }, (err) => {
        if(err){
            console.log('Unable to fetch todos', err);
        }
    });

    db.collection('Todos').find({
        _id: new ObjectID('5a12e11762952191f495552a')
    }).toArray().then((docs)=>{
        console.log('Todos fetched using _id(ObjectID) ');
        console.log(JSON.stringify(docs, undefined,2));
    }, (err) => {
        if(err){
            console.log('Unable to fetch todos', err);
        }
    });

    db.collection('Users').find({name:'Neha'}).toArray().then((docs) =>{
        console.log('Users having name as "Neha" ');
        console.log(JSON.stringify(docs,undefined,2));
    });

    //db.close();
});