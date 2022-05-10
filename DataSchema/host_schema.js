const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Host = new Schema({
    Host_Name: {
        type: String
    },
    Host_Address : [{
        HouseNumber: Number,
        StreetName: String,
        City: String,
        State: String,
        Country, String
    }],
    Host_Distance: {
        type: Number
    },
    Host_Availability: [{
        Rooms: Number,
        Beds: Number,
        Slots: Number
    }],
    Restrinctions: {
        type: String
    },
    ProvidingRide: {
        type: Boolean
    }
});

module.exports = mongoose.model('Host', Host);    