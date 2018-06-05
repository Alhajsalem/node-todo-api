var express = require('express');
var bodyParser = require('body-parser');
var {ObjectId} = require('mongodb');




var {mongoose} = require('./db/mongoose');

var {Todo} = require('./models/todo');

var {User} = require('./models/user');


var app = express();


app.use(bodyParser.json());


//////////////////////////////////////////////////////////////////////////////////////////////


app.post('/todos',(req,res)=>{

    var todo = new Todo({text: req.body.text});

    todo.save().then((doc)=>{

        res.send(doc);

    }, (e)=>{

        res.status(400).send(e);

    });

});



//////////////////////////////////////////////////////////////////////////////////////////////

app.get('/todos',(req,res)=>{

    Todo.find().then((todos)=>{

        res.send({todos})

    }, (e)=>{
        res.status(400).send(e);

    });


});

//////////////////////////////////////////////////////////////////////////////////////////////

app.get('/todos/:id',(req,res)=>{

    var id = req.params.id;

    if(!ObjectId.isValid(id)){

      return res.sendStatus(404)
    }

    Todo.findById({
        _id: id
    }).then((user)=>{

        if(!user){
            return res.sendStatus(404)
        }

        res.send(user)
    }).catch((e)=>{

        res.sendStatus(400);
    })

});
//////////////////////////////////////////////////////////////////////////////////////////////



app.listen(3000,()=>{

    console.log('Started on Port 3000');
});


module.exports = {app};