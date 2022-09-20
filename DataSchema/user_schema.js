const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    user_firstName:{
        type: String
    },
    user_middleName:{
        type: String
    },
    user_lastName:{
        type: String
    },
    user_yearOfBirth:{
        type: String
    },
    user_gender:{
        type: String
    },
    user_city:{
        type: String
    },
    user_state:{
        type: String
    },
    user_country:{
        type: String
    },
    user_otherCountry:{
        type: String
    },
    user_allergy:{
        type: String
    },
    user_hasAllergy:{
        type: Boolean
    },
    user_phoneNumber:{
        type: Number
    },
    user_arrivingFlightNumber:{
        type: String
    },
    user_arrivingFlightName:{
        type: String
    },
    user_arrivingFlightAirport:{
        type: String
    },
    user_arrivingFlightDate:{
        type: String
    },
    user_arrivingFlightTime:{
        type: String
    },
    user_departingFlightNumber:{
        type: String
    },
    user_departingFlightName:{
        type: String
    },
    user_departingFlightAirport:{
        type: String
    },
    user_departingFlightDate:{
        type: String
    },
    user_departingFlightTime:{
        type: String
    },
    user_hostedby:{
        type: String
    },
    user_goingToAsthan: {
        type: String
    },
    user_email:{
        type: String
    },
    user_comments: {
        type: String
    },
    user_emergencyContact: {
        type: String
    },
    user_age: {
        type: Number
    },
    user_ride_from_airport: {
        type: String
    },
    user_ride_to_airport: {
        type: String
    },
    user_family_identified: {
        type: String
    },
    user_last_updated_by: {
        type: String
    }
},  {timestamps: true} );

module.exports = mongoose.model('User', User);    
