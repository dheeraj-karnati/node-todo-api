//ES6 destructuring
//const MongoClient =  require('mongodb').MongoClient;

const {MongoClient, ObjectID} =  require('mongodb');
var obj = new ObjectID();
console.log(obj);
var user = {name: 'andrew',age:25};
var {name} = user;
console.log(name);
// MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
// if(err){
// return console.log('unable to connect to mongodb server');
//
// }
// console.log('connected to mongodb server');
// db.collection('Todos').insertOne({
// text: 'Something to do',
// completed:false,
// priority: 1,
// flag: false
// },(err,results)=>{
//   if(err){
// return console.log('Unable to insert todo',err);
// }
// console.log(JSON.stringify(results.ops,undefined, 2));
// });
//
// db.close();
// });

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{

if(err){

return console.log('Unable to connect to mongodb server');
}
console.log('connected to mongo server');
db.collection('users').insertOne({
name:'dheeraj',
age:25,
location:'Poughkeepsie, NY'
},(err,results)=>{
if(err){

return console.log('unable to insert users',err);
}
console.log(JSON.stringify(results.ops,undefined,2));
});
db.close();
});










// MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
// if(err){
//
// return console.log('unable to connect mongodb server');
// }
//
// console.log('connected to mongodb server');
// db.collection('Todos').insertOne({
// text:'Something to do',
// completed:false
//
// },(err,result) => {
// if(err){
//   return console.log('Unable to insert todo',err);
// }
// console.log(JSON.stringify(res))
// });
//
//
// });
