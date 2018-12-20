var os = require('os');
let fs = require('fs');

products = {
    product_file_name: `${__dirname}/../products.json`,
    getAllProducts: function (callback) {
        return  fs.readFile( this.product_file_name , 'utf8', (err, file)=>{
            if(!err){
                try{
                    callback(null, JSON.parse(file));
                }catch(e){
                    return callback(e);
                } 
            }else{
                console.log(err);
            }
        });
    }
}
module.exports = products;