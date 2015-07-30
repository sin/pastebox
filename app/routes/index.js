auth = require('./auth');
users = require('./users');
snippets = require('./snippets');

module.exports = function (app, api) {
    auth.set(app);
    users.set(api);
    snippets.set(api);
};
