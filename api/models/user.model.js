import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username : {
        type : 'string',
        Required : true,
        unique : true
    },
    email : {
        type : 'string',
        Required : true,
        unique : true
    },
    password : {
        type : 'string',
        Required : true,
    },
    profiePicture : {
        type : 'string',
        default : 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg',
    },
},{timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;