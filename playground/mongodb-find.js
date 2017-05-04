//ES6 destructuring
//const MongoClient =  require('mongodb').MongoClient;

const {MongoClient, ObjectID} =  require('mongodb');
var obj = new ObjectID();
//console.log(obj);
var user = {name: 'andrew',age:25};
var {name} = user;
console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

if(err){

return console.log('Unable to connect to mongodb server');
}
console.log('connected to mongo server');
// db.collection('Todos').find({
//   _id:new ObjectID("590aa9c5a0aa542826306841")
//
// }).toArray().then((docs)=>{
// console.log('Todos');
// console.log(JSON.stringify(docs,undefined,2));
//
// },(err) =>{
//
//   console.log('Unable to fetch todos',err);
// });
db.collection('users').find({name:'andrew'}).toArray().then((docs)=>{

console.log(JSON.stringify(docs,undefined,3));
},(err)=>{
console.log('Unable to fetch users data');

});

// db.collection('Todos').find().count().then((count)=>{
// console.log(`Todos count:${count}`);
//
// },(err) =>{
//
//   console.log('Unable to fetch todos',err);
// });
db.close();
});
