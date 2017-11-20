const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
    if(err){
        return console.log('Unable to connect to MongoDB Server', err);
    }
    console.log('Connected to MongoDB Server!');

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

    db.close();
});