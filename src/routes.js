/**
 * 
 */
class Routes {
    constructor(app, passport) {
        this.app = app;
        this.app.get('/', this.getProducts);
        this.app.post('/addCommand', this.addCommand);
        this.app.get('/getUserOrders', this.getUserOrders);
        //this.app.post('/login', this.login );
        this.app.post('/login', passport.authenticate('local', { 
            successRedirect: '/',
            failureRedirect: '/',
            failureFlash: true })    
);
    };
    getProducts(req, res) {
        debugger;
        ProductManager.getAll(
            function (err, Liste) {
                res.render('index', { body: Liste, messages : req.flash('error'), user : req.user });
            }
        ) 
    };
    addCommand (req, res) {
         if(typeof req.user != 'undefined'){
             ProductManager.addCommand(req, function (err, doc) {
                 res.contentType('json')
                 if (err) {
                     res.status(400);
                     res.send(JSON.stringify("un problème et survenue"));
                 } else {
                     res.status(200);
                     res.send(JSON.stringify(doc.orders_counter));
                 }
             })
         }else{
             res.send(JSON.stringify("Connecter vous !"));
         }
     };
     getUserOrders (req, res) {
    
     };
     login(){
            passport.authenticate('local', { 
                successRedirect: '/',
                failureRedirect: '/',
                failureFlash: true })    

     }
}

module.exports = function(app, passport){
    return new Routes(app, passport);
}