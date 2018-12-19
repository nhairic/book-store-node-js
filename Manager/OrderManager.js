var Order = require('../models/Order');
OrderManager = {
    // "getAll": function (callback) {
    //     Product.find({},
    //         function (err, Liste) {
    //             if(err) {
    //                 callback(err)
    //             }else{
    //                 callback(null, Liste)
    //             }
    //         }
    //     )
    // },
    "create": function (Product, req, callback) {
        try {
            console.log('ici');
            console.log(Product);
            Order.create( {'product': Product.id, 'user' : req.user.id, price: Product.EUR_price }, function( err, doc){
                console.log('la');
                if(err){
                    callback(err)
                }else{
                    console.log(doc)
                    callback(null, doc)
                }
            });
        }catch(e){
            console.log(e);
            callback(e);
        }
    }
}
module.exports = OrderManager;