const db = require("../DataSchema/index");
const User = db.user;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };
  exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
  };

  exports.getAllUsers = (req, res) => {
    User.find(function(err, users){
      if(err){
          console.log(err)
      } else{
          res.json(users);
      }
  });
}

exports.getUsersNotAssignedToHost = (req, res) => {
  User.find({ user_hostedby: '', user_goingToAsthan: req.query.asthan}, function(err, users){
    if(err){
      console.log(err)
    }
    else{
      res.json(users);
    }
  })
}

  exports.createUser = (req, res) => {
    const user = new User({
      user_firstName: req.body.user_firstName,
      user_lastName: req.body.user_lastName,
      user_yearOfBirth: req.body.user_yearOfBirth,
      user_gender: req.body.user_gender,
      user_city: req.body.user_city,
      user_country: req.body.user_country,
      user_allergy: req.body.user_allergy,
      user_hasAllergy: req.body.user_hasAllergy,
      user_phoneNumber: req.body.user_phoneNumber,
      user_arrivingFlight: req.body.user_arrivingFlight,
      user_arrivingAirport: req.body.user_arrivingAirport,
      user_departingFlight: req.body.user_departingFlight,
      user_departingAirport: req.user_departingAirport,
      user_hostedby: req.body.user_hostedby,
      user_goingToAsthan: req.body.user_goingToAsthan,
    });

    user.save((err, user)=>{
      if(err){
        req.status(500).send({message: err});
        return;
      }
      else{
        res.send({message: "User created"});
      }
    })
  }