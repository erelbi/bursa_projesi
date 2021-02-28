// var http=require('http');
// var fs = require('fs');
// http.createServer(function(req,res){
//     fs.readFile('home.html', function(err,data){
//         res.writeHead(200,{'Content-Type': 'text/html'});
//         res.write(data);
//         return res.end();
//     } )

    

// }).listen(8081);

const express = require('express')
const fs = require('fs');
const app = express();
const port = 8081
app.get('/', (req, res) => {
    res.send('ABC')
    
})

app.listen(port, () => {
    console.log('localhost:8081  e git!')
})