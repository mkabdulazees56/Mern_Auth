import { timeStamp } from "console";
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
},{timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;