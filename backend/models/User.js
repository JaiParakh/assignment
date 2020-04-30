const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    organisation: {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model('Users', UserSchema);

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
}

module.exports.getUserByName = (name, callback) => {
    let query = {name: name};
    User.findOne(query, callback);
}

module.exports.getUserByEmail = (email, callback) => {
    let query = {email: email};
    User.findOne(query, callback);
}

module.exports.addUser = (newUser, callback) => {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

module.exports.comparePassword = (candpass, hash, callback) => {
    bcrypt.compare(candpass, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}

