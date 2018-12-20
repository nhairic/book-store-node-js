let fs = require('fs');
let files = fs.readdirSync(__dirname + '/files/');

files.forEach((file)=>{
//    const contents = fs.readFileSync(`${__dirname}/files/${file}`, 'utf8' );
    fs.readFile(`${__dirname}/files/${file}`, 'utf8', (err, file)=>{
        console.log(err,file);
    })
   // console.log(contents);
   // console.log(file);
})