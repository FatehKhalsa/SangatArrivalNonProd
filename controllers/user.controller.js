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

// Get all sangat per asthan
exports.getUsersPerAsthan = (req, res) =>{
  User.find({user_goingToAsthan: req.query.asthan}, function(err, users){
    if(err){
      console.log(err)
    }
    else{
      res.json(users)
    };
  })
}

  exports.createUser = (req, res) => {

    const user = new User({
      user_firstName: req.body.user_firstName,
      user_middleName: req.body.user_middleName,
      user_lastName: req.body.user_lastName,
      user_yearOfBirth: req.body.user_yearOfBirth,
      user_gender: req.body.user_gender,
      user_city: req.body.user_city,
      user_state: req.body.user_state,
      user_country: req.body.user_country,
      user_allergy: req.body.user_allergy,
      user_hasAllergy: req.body.user_hasAllergy,
      user_phoneNumber: req.body.user_phoneNumber,
      user_arrivingFlightNumber: req.body.user_arrivingFlightNumber,
      user_arrivingFlightName: req.body.user_arrivingFlightName,
      user_arrivingFlightAirport: req.body.user_arrivingFlightAirport,
      user_arrivingFlightDate: req.body.user_arrivingFlightDate,
      user_departingFlightNumber: req.body.user_departingFlightNumber,
      user_departingFlightName: req.body.user_departingFlightName,
      user_departingFlightAirport: req.body.user_departingFlightAirport,
      user_departingFlightDate: req.body.user_departingFlightDate,
      user_hostedby: req.body.user_hostedby,
      user_goingToAsthan: req.body.user_goingToAsthan,
      user_email: req.body.user_email,
      user_comments: req.body.user_comments,
      user_emergencyContact: req.body.user_emergencyContact,
      user_age: req.body.user_age,
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

  // Update a user 
  exports.updateUser = (req, res) => {
      const filter = {user_firstName: req.body.user_firstName};
      const update = { user_firstName: req.body.user_firstName,
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
        user_goingToAsthan: req.body.user_goingToAsthan};

    User.findOneAndUpdate((filter, update)=>{

    })
  }