var os = require('os');
let fs = require('fs');
var regExp = "i want product *{\w}";
var regEXexpression = new RegExp(regExp , 'i');

var readline = require('readline');
var rl = readline.createInterface({input: process.stdin, output: process.stdout, terminal: false});

var product_file_name = `${__dirname}/products.json`; 

getAllProducts(showProducts);
//orderProductById('l1', addCOunter)
function showProducts(err, products) {
    if(!err){
        //console.log(err,file);
        console.log("Bienvenue. Voici les produits disponibles");
        products.forEach(element => {
            console.log(`  .${element.id} - ${element.name}/ ${element.EUR_price} / ${element.orders_counter}   `);
        });
    }
}

function addCOunter(idtofind, err, products) {
    if(err) {
        console.log(e);
    }else{
        var found = products.find(function(element) {
            return element.id == idtofind;
          });
        if(typeof found != "undefined") {
            console.log(found.name);
            found.orders_counter++;
            fs.writeFile(product_file_name, JSON.stringify(products, null, 2), (err, file) =>{
                if(err){
                    console.log(e)
                }else{
                    console.log('Commande terminé. voici votre fichier : ' + found.file_link);
                }
            });
        }else{
            console.log("Aucun produit");
        }
    }
}

/**
 * 
 * @param {*} callback 
 */
function getAllProducts(callback ) {
    fs.readFile( product_file_name , 'utf8', (err, file)=>{
        if(!err){
            try{
                var json_liste = JSON.parse(file)
                
            }catch(e){
                return callback(e);
                
            } 
            callback(null, json_liste);
        }
    })
}

function orderProductById(id, callback) {
    fs.readFile( product_file_name , 'utf8', (err, file)=>{
        if(!err){
            try{
                var json_liste = JSON.parse(file)
                
            }catch(e){
                return callback(e);
                
            } 
            callback(id, null, json_liste);
        }
    })
}

rl.on('line', function(line) {
    //console.log('I want product ' + line);
    let id = line.replace('i want product ', '');
    orderProductById(id, addCOunter);   
})