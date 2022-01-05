const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now(),
    }

})

userSchema.set('toJSON', {
    transform: (document, retuernedObject) => {
        retuernedObject.id = retuernedObject._id.toString();
        delete retuernedObject._id;
        delete retuernedObject.__v;
        //delete retuernedObject.password;
    }
});

userSchema.plugin(uniqueValidator, { message: 'Email already in use!' });


module.exports = mongoose.model('user', userSchema);