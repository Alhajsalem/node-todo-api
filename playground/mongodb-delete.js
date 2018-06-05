const  {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();





MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{


    if(err){

        return console.log('Unable to connect to MongoDB server',err);
    }

    console.log('Connected to MongoDB server');

    //
    // db.collection('Todos').deleteMany({text: 'Eat lunch'},(error, result)=>{
    //
    //     if(error){
    //        return  console.log(error)
    //     }
    //
    //     console.log(result);
    //
    // });


    db.collection('Todos').findOneAndDelete({_id: new ObjectID("5b0bca0f7cf39cef49e6f848")}).then((result=>{

        console.log(result)

    }));



    db.close();
});
