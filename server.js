const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
//Getting our POSTS routes
const routes = require('./server/routes/routes');

//Using Middleware
 // parse application/json
app.use(bodyParser.json());                        

 // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'dist')));

app.use('/routes', routes);

//Catch all other routes request and return it to the index
app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname, 'dist/index.html'))
});

const port = process.env.PORT || 4600;

app.listen(port, (req, res)=>{
    console.log(`Running !! ${port}`);
})