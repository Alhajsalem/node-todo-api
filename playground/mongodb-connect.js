//const  MongoClient = require('mongodb').MongoClient;


const  {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();



// var user = {name: 'Yousef Alhajsalem', age : 26};
//
// var {name} = user;
//
//  console.log(name);
//
// MongoClient.connect('mongodb://localhost:27017/Users', (err, db)=>{
//
//     // 'mongodb://alhajsa:1234@10.0.2.160:27017/TodoApp?authSource=admin
//
//     if(err){
//
//        return console.log('Unable to connect to MongoDB server',err);
//     }
//
//     console.log('Connected to MongoDB server');
//
//
//     // db.collection('Todos').insertOne({
//     //     text: 'something to do',
//     //     completed:false
//     // }, (err,result)=>{
//     //     if(err){
//     //
//     //
//     //
//     //       return console.log('Unable to insert todo',err)
//     //
//     //     }
//     //     console.log(JSON.stringify(result.ops, undefined,3))
//     // });
//
//
//      db.collection('Users').insertOne({
//
//          name: 'Yousef Alhajsalem',
//          age: 35,
//          gender : 'male'
//
//      }, (err, result)=>{
//
//          if(err){
//              return console.log('Unable to insert todo',err)
//
//          }
//
//          console.log(result.ops[0]._id.getTimestamp());
//
//
//      });
//
//
//     db.close();
// });