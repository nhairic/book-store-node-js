const express = require('express');
const path = require('path');
let pug = require('pug');
const app = express();
const port = 3030

app.set("view engine", "pug");
app.set('views', path.join(__dirname, "views"));

app.get("/", (req,res)=> {
    res.render("hompage");
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))   