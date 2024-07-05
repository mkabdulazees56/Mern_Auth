import mongoose from "mongoose";
import { type } from "os";

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
});