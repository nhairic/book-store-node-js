const mongoose = require('mongoose')

var schema = mongoose.Schema({ 
    username : 'string', 
    password: 'string', 
 });
 schema.methods.validPassword = function( pwd ) {
    // EXAMPLE CODE!
    return ( this.password === pwd );
};
var User = mongoose.model('User', schema);
module.exports = User;