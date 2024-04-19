import mongoose from "mongoose";
const { Schema } = mongoose;

const collection = "Users";

const schema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
    },
    age: {
        type: Number,
    },
    password: {
        type: String,
    },
    role: {
        type: String
    }
});

const userModel = mongoose.model(collection, schema);
export { userModel };