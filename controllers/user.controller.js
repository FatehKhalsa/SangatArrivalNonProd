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
  User.find(function (err, users) {
    if (err) {
      console.log(err)
    } else {
      res.json(users);
    }
  });
}


exports.checkDuplicateUser = (req, res) => {
  // Username
  User.findOne({
    user_firstName: req.body.user_firstName,
    user_lastName: req.body.user_lastName,
    user_yearOfBirth: req.body.user_yearOfBirth,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user) {
      res.status(200).send({ message: "User Existing", id: user._id});
      return;
    }
    return res.status(200).send({ message: "User not Found" });
  });
};


exports.deleteFlightInfo = (req, res) => {
  let users = [];

  User.find(function (err, users) {
    if (err) {
      console.log(err)
    } else {
      users.push(res.json(users));
    }


    if (users.length > 0) {
      users.forEach(user => {
        const filter = { _id: user._id };
        const update = {
          user_firstName: user.user_firstName,
          user_middleName: user.user_middleName,
          user_lastName: user.user_lastName,
          user_yearOfBirth: user.user_yearOfBirth,
          user_gender: user.user_gender,
          user_city: user.user_city,
          user_state: user.user_state,
          user_country: user.user_country,
          user_otherCountry: user.user_otherCountry,
          user_allergy: user.user_allergy,
          user_hasAllergy: user.user_hasAllergy,
          user_phoneNumber: user.user_phoneNumber,
          user_arrivingFlightNumber: null,
          user_arrivingFlightName: null,
          user_arrivingFlightAirport: null,
          user_arrivingFlightDate: null,
          user_arrivingFlightTime: null,
          user_departingFlightNumber: null,
          user_departingFlightName: null,
          user_departingFlightAirport: null,
          user_departingFlightDate: null,
          user_departingFlightTime: null,
          user_hostedby: user.user_hostedby,
          user_goingToAsthan: user.user_goingToAsthan,
          user_email: user.user_email,
          user_comments: user.user_comments,
          user_emergencyContact: user.user_emergencyContact,
          user_age: user.user_age,
          user_ride_from_airport: null,
          user_ride_to_airport: null,
          user_family_identified: user.user_family_identified,
          user_last_updated_by: user.user_last_updated_by,
          user_pending: false,
        }


        User.findOneAndUpdate(filter, update, { new: true }, function (err, user) {
          if (err) {
            console.log(err);
            req.status(500).send({ message: err });
            return;
          }
        })

      })
    }
    console.log("Flight information deleted");
  });
}

exports.getArrivalReportUsers = (req, res) => {
  User.find({ user_arrivingFlightDate: { $nin: [null, ""] } }, function (err, users) {
    if (err) {
      console.log(err)
    } else {
      res.json(users);
    }
  });
}

exports.getPendingUsers = (req, res) => {
  User.find({ user_pending: true }, function (err, users) {
    console.log("Inside Pending Call", users)
    if (err) {
      console.log(err)
    }
    else {
      res.json(users)
    }
  })
}

exports.getUsersNotAssignedToHost = (req, res) => {
  console.log("Request", req)
  User.find({ user_hostedby: '', user_goingToAsthan: req.query.asthan }, function (err, users) {
    if (err) {
      console.log(err)
    }
    else {
      res.json(users);
    }
  })
}

// Get all sangat per asthan
exports.getUsersPerAsthan = (req, res) => {
  User.find({ user_goingToAsthan: req.query.asthan }, function (err, users) {
    if (err) {
      console.log(err)
    }
    else {
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
    user_otherCountry: req.body.user_otherCountry,
    user_allergy: req.body.user_allergy,
    user_hasAllergy: req.body.user_hasAllergy,
    user_phoneNumber: req.body.user_phoneNumber,
    user_arrivingFlightNumber: req.body.user_arrivingFlightNumber,
    user_arrivingFlightName: req.body.user_arrivingFlightName,
    user_arrivingFlightAirport: req.body.user_arrivingFlightAirport,
    user_arrivingFlightDate: req.body.user_arrivingFlightDate,
    user_arrivingFlightTime: req.body.user_arrivingFlightTime,
    user_departingFlightNumber: req.body.user_departingFlightNumber,
    user_departingFlightName: req.body.user_departingFlightName,
    user_departingFlightAirport: req.body.user_departingFlightAirport,
    user_departingFlightDate: req.body.user_departingFlightDate,
    user_departingFlightTime: req.body.user_departingFlightTime,
    user_hostedby: req.body.user_hostedby,
    user_goingToAsthan: req.body.user_goingToAsthan,
    user_email: req.body.user_email,
    user_comments: req.body.user_comments,
    user_emergencyContact: req.body.user_emergencyContact,
    user_age: req.body.user_age,
    user_ride_from_airport: req.body.user_ride_from_airport,
    user_ride_to_airport: req.body.user_ride_to_airport,
    user_family_identified: req.body.user_family_identified,
    user_last_updated_by: req.body.user_last_updated_by,
  });

  user.save((err, user) => {
    if (err) {
      req.status(500).send({ message: err });
      return;
    }
    else {
      res.send(user);
    }
  })
}

// Update a user 
exports.updateUser = (req, res) => {
  const filter = { _id: req.body._id };
  const update = {
    user_firstName: req.body.user_firstName,
    user_middleName: req.body.user_middleName,
    user_lastName: req.body.user_lastName,
    user_yearOfBirth: req.body.user_yearOfBirth,
    user_gender: req.body.user_gender,
    user_city: req.body.user_city,
    user_state: req.body.user_state,
    user_country: req.body.user_country,
    user_otherCountry: req.body.user_otherCountry,
    user_allergy: req.body.user_allergy,
    user_hasAllergy: req.body.user_hasAllergy,
    user_phoneNumber: req.body.user_phoneNumber,
    user_arrivingFlightNumber: req.body.user_arrivingFlightNumber,
    user_arrivingFlightName: req.body.user_arrivingFlightName,
    user_arrivingFlightAirport: req.body.user_arrivingFlightAirport,
    user_arrivingFlightDate: req.body.user_arrivingFlightDate,
    user_arrivingFlightTime: req.body.user_arrivingFlightTime,
    user_departingFlightNumber: req.body.user_departingFlightNumber,
    user_departingFlightName: req.body.user_departingFlightName,
    user_departingFlightAirport: req.body.user_departingFlightAirport,
    user_departingFlightDate: req.body.user_departingFlightDate,
    user_departingFlightTime: req.body.user_departingFlightTime,
    user_hostedby: req.body.user_hostedby,
    user_goingToAsthan: req.body.user_goingToAsthan,
    user_email: req.body.user_email,
    user_comments: req.body.user_comments,
    user_emergencyContact: req.body.user_emergencyContact,
    user_age: req.body.user_age,
    user_ride_from_airport: req.body.user_ride_from_airport,
    user_ride_to_airport: req.body.user_ride_to_airport,
    user_family_identified: req.body.user_family_identified,
    user_last_updated_by: req.body.user_last_updated_by,
  }

  User.findOneAndUpdate(filter, update, { new: true }, function (err, user) {
    if (err) {
      console.log(err);
      req.status(500).send({ message: err });
      return;
    }
    else {
      res.send(user);
    }
  })
}


// Find travel info for user

exports.findTravelInfo = (req, res) => {
  console.log("Request", req.query.user_firstName, req.query.user_lastName, req.query.user_phoneNumber)
  User.findOne({ user_firstName: req.query.user_firstName, user_lastName: req.query.user_lastName, user_phoneNumber: req.query.user_phoneNumber }, function (err, info) {
    if (err) {
      console.log(err)
    }
    else {
      res.json(info)
    }
  });

}
