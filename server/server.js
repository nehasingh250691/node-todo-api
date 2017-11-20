var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

var newTodo = new Todo({
    text:'Cook Dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved todo ', doc);
},(e) =>{
    console.log('Unable to save todo ', e)
});

var anotherTodo = new Todo({
    text:'Feed the cat',
    completed:true,
    completedAt:123
});


anotherTodo.save().then((doc) => {
    console.log('Saved todo ', doc);
},(e) =>{
    console.log('Unable to save todo ', e)
});

// text : '' - will fail
// text : '            ' - will also fail becuase of trim= true
var secondTodo = new Todo({
    text:'  Something to do   '
});

//text being a string property, if we try to assign a number or boolean it will save it without any error bcoz of implicit conversion to string type
//will fail if we try to assign an object type
var thirdTodo = new Todo({
    text:true
});


// USER MODEL
var User = mongoose.model('User',{
    email:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    }
});

var firstUser = new User({
    email:'neha@gmail.com   '
});

firstUser.save().then((doc) => {
    console.log('Saved user ', doc);
},(e) =>{
    console.log('Unable to save user ', e)
});


