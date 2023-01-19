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
    contactNumber: {
        type: Number,
        required: true
    },
    __link:{
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

const UserInfo = mongoose.model("UserInfo", userInfoSchema, "userInfo");
module.exports = UserInfo
