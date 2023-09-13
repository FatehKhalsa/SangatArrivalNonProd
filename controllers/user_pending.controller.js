const db = require("../DataSchema/index");
const UserPending = db.userPending;




exports.getAllUsers = (req, res) => {
    UserPending.find(function (err, users) {
        if (err) {
            console.log(err)
        } else {
            res.json(users);
        }
    });
}

exports.deleteUser = (req, res) => {
    // try {
    //     UserPending.deleteOne( { "_id" : req.body._id } );
    //  } catch (e) {
    //     print(e);
    //  }
     

    console.log("Input Query", req.body._id)
        UserPending.deleteOne({ _id: req.body._id}, function(err,user){
            if(err){
                console.log(err)
                req.status(500).send({ message: err });
                return;
            } 
            else{
                res.json("Removed Pending User")
            }
        })

}

exports.createUser = (req, res) => {

    const user = new UserPending({
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

    UserPending.findOneAndUpdate(filter, update, { new: true }, function (err, user) {
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
