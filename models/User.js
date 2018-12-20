const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
var schema = mongoose.Schema({ 
    username : 'string', 
    password: 'string', 
 });
 schema.methods.validPassword = function( pwd ) {
    // EXAMPLE CODE!
    return bcrypt.compareSync(pwd, this.password);
};
var User = mongoose.model('User', schema);
module.exports = User;