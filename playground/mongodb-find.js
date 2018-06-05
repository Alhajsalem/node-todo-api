const  {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();





MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{


    if(err){

       return console.log('Unable to connect to MongoDB server',err);
    }

    console.log('Connected to MongoDB server');

    // find is returning mongodb cursor

    // toArray is one method which you can apply on the cursor

    // db.collection('Todos').find({completed:true}).toArray().then((err,result)=>{
    //     if(err){
    //         console.log(err);
    //
    //     }
    //     else {
    //         console.log(result);
    //
    //     }
    //
    // });


    //
    // db.collection('Todos').find(
    //     {
    //         _id: new ObjectID('5b0bca0f7cf39cef49e6f848')
    //
    //     }
    // ).toArray().then((err,result)=>{
    //     if(err){
    //         console.log(err);
    //
    //     }
    //     else {
    //         console.log(result);
    //
    //     }
    //
    // });


   db.collection('Todos').find().count((err,count)=>{

       if(err){
           console.log(err);
       }
       else{
           console.log(count);
       }

   });






    db.close();
});