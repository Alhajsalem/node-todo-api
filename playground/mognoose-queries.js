const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id = '5b163d64c5a0d21f5402943d';

if(!ObjectID.isValid(id)){

console.log('ID not valid');
}




// Todo.find({
//     _id: id
// }).then((todos)=>{
//     console.log('Todos',todos);
//
// });
//
//
// Todo.findOne({
//     _id: id
// }).then((todo)=>{
//     console.log('Todo',todo);
//
// });
//
//
// User.findById({
//     _id: id
// }).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found')
//     }
//     console.log('Todo',todo);
// }).catch((e)=>{
//     console.log('Error has been happend: ',e)
// });

User.findById({
    _id: id
}).then((user)=>{

    if(!user){
        console.log('User not found')
    }

    else {

        console.log('User',user);
    }

}).catch((e)=> console.log('Error happend',e))