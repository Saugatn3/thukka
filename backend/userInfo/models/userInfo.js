const mongoose = require("mongoose");


const userInfoSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    contact: {
        address: {
            city: {
                type: String,
                required: true
            },
            street: {
                type: String,
                required: false
            }
        },
        number: {
            type: Number,
            required: true
        }
    },
    link:{
        collectionName:{
            type: String,
            required: true
        },
        id:{
            type:mongoose.Types.ObjectId,
            required: true
        }
    }
});

module.exports = mongoose.model("UserInfo", userInfoSchema, "userInfo");
