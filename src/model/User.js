import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true
    },
    fname: {
        type: String,
        required: [true, "frist name is required"]
    },
    lname: {
        type: String,
        required: [true, "last name is required"]
    },
    phone: {
        type: String
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    birthDate: {
        type: Date,
        required: true
    },
    profilePicUrl: {
        type: String,
        default: '/user/default.png'
    }
}, {
    timestamps: true
});

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);