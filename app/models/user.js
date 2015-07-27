var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var SALT_FACTOR = 10;

var UserSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, index: {unique: true}}
});

UserSchema.pre('save', function (next) {
    var _this = this;

    if (!_this.isModified('password')) return next();

    bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(_this.password, salt, function (err, hash) {
            if (err) return next(err);

            _this.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);
