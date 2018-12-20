var Order = require('../models/Order');
OrderManager = {
    "create": function (Product, req, callback) {
        try {
            Order.create( {'product': Product.id, 'user' : req.user.id, price: Product.EUR_price }, function( err, doc){
                if(err){
                    callback(err)
                }else{
                    console.log(doc)
                    callback(null, doc)
                }
            });
        }catch(e){
            callback(e);
        }
    }
}
module.exports = OrderManager;