auth = require('./auth');
users = require('./users');

module.exports = function (app, api) {
    auth.set(app);
    users.set(api);
};
