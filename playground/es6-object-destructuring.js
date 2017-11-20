var user = {name:'Neha', age:25};
//created a new variable 'name' initialized with the value of user object 'name' property
var {name} = user;


console.log(name);

// MongoDB _id(ObjectID) 

const {ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);