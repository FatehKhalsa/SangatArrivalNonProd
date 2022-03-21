const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    user_firstName:{
        type: String
    },
    user_lastName:{
        type: String
    },
    user_yearOfBirth:{
        type: Number
    },
    user_city:{
        type: String
    },
    user_country:{
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
    }
});

module.exports = mongoose.model('User', User);    
