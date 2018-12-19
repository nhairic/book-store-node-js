const express = require('express');
const app = express()
const port = 3030

app.use(function (res, res, next){
    console.log('Time', Date.now())
    next()
})

app.use(function (res, res, next){
    console.log('eeeeee');
    next()
})
middleAbout = function (res, res, next){
    console.log('aaaaaa');
    next()
}


app.get('/', (req, res )=> res.send('Hello World!'))

app.get('/about', middleAbout ,(req, res )=> res.send('Hello World!'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))


