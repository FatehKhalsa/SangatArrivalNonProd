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
      user_hostedby: req.body.user_hostedby,
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