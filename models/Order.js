const mongoose = require('mongoose')

var schema = mongoose.Schema({ 
    product : {type: mongoose.Schema.Types.ObjectId, ref: 'Product'}, 
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date:  {type: Date, default: Date.now }, 
    price : 'number'
 });

var Order = mongoose.model('Order', schema);
module.exports = Order;