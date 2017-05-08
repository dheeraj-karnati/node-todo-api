const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');


var id = '590bab74cbb9830bafcb9865';


// Todo.find({
//
// _id:id
//
// }).then((todo)=>{
//
//   console.log('Todo',todo);
// });

User.findById(id).then((user)=>{
if(!user){

return console.log('Id not found');
}
  console.log('Todo by id', user);

}).catch((e)=>console.log(e));
