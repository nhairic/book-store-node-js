var Product = require('../models/Product');
var OrderManager = require('../Manager/OrderManager');
ProductManager = {
    "getAll": function (callback) {
        Product.find({},
            function (err, Liste) {
                if(err) {
                    callback(err)
                }else{
                    callback(null, Liste)
                }
            }
        )
    },
    "addCommand": function (req ,callback) {
        try {
            Product.findOneAndUpdate({ _id : req.body.id     }, { $inc: { orders_counter : 1 } },{new : true }, function( err, doc){
                if(err){
                    callback(err)
                }else{
                    OrderManager.create(doc, req, function(err, docOrder){
                        callback(null, doc)
                    });
                    
                }
            });
        }catch(e){
            callback(e);
        }
    }
}
module.exports = ProductManager;