const mongoose = require('mongoose')

var schema = mongoose.Schema({ 
    name: 'string', 
    description: 'string', 
    USD_orice: 'number', 
    EUR_price : 'number', 
    file_link: 'string', 
    creation_date: 'date', 
    orders_counter : 'number' });

var Product = mongoose.model('Product', schema);
module.exports=Product;