const  {MongoClient,ObjectID} = require('mongodb');

var obj = new ObjectID();





MongoClient.connect('mongodb://localhost:27017/Users', (err, db)=>{


    if(err){

        return console.log('Unable to connect to MongoDB server',err);
    }

    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({_id: new ObjectID("5b0bd97c6250e1f2b187f842")},{$inc:{age : -10}},{returnOriginal : false}).then((result)=>{


        console.log(result);

    })

    db.close();
});