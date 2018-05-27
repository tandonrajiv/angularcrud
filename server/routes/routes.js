const express =  require('express');
const router = express.Router();
var db = require('./db');
const axios = require('axios');

const PostAPI = 'https://jsonplaceholder.typicode.com';

var User = require('./models/user');

// Get Post
router.get('/',(req, res)=>{
   res.send("Working !!!")
});

router.get('/posts',(req, res)=>{
    /*axios.get(`${PostAPI}/posts`)
    .then(function (posts) {
       res.status(200).json(posts.data);
    })
    .catch(function (error) {
        res.status(500).json(error);
    });*/
    User.find((err,users) => {
        if(err){
        	res.send(err);
        }
        res.json(users);
   })
});

router.post('/contact',(req, res)=>{
    var user = new User(req.body);
    
    user.save((err,user) => {
          if(err){
              res.json({
              status: '0',
              error: err
            });
          }
          res.json({
            status: '1',
            message: 'User Added Successfully'
          });
     })
})

module.exports = router;