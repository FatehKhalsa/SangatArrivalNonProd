const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8080;



let User = require('./DataSchema/user_schema');

app.use(cors());
app.use(bodyParser.json());

const db = require("./DataSchema/index");
const Role = db.role;

const url = "mongodb+srv://sangat:waheguru22@dssgs.ieddu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//dsggs 
db.mongoose.connect(url,
 { useNewUrlParser: true, })
 .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'moderator' to roles collection");
      });
      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
      });
    }
  });
}

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})



const userRoutes = express.Router();


require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/host.routes')(app);


//Getting all users
userRoutes.route('/allUsers').get(function(req, res){
    User.find(function(err, users){
        if(err){
            console.log(err)
        } else{
            res.json(users);
        }
    });
});

// Adding a user
userRoutes.route('/addUser').post(function(req, res){
    let user = new User(req.body);
    // Need to handle duplicate insertions here
    user.save().then(user=>{
        res.status(200).json({
            'User': 'User added successfully'});
        })
        .catch(err=>{
            res.status(400).send('adding user failed');
        });
})

// Updating a user

userRoutes.route('/update/:id').post(function(req, res){
    User.findById(req.params.id, function(err, user){
        if(!user)
            res.status(404).send('data is not found');
    })
})

app.use('/user', userRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});