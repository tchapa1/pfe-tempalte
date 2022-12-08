const express = require('express')
const User = require('../models/user')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const router = express.Router();



  ///////////////////////////////////////////////////////////////////////////////////////////////

  router.route('/login').post((req, res, next) => {
    let fetchedUser;
    User.findOne({email:req.body.email}).then(user=>{
      if(!user){
        return res.status(401).json({
          message: "Auth failed no such admin (email ne existe pas verifier.......)  "
        })
      }
      fetchedUser=user;
      ss = user.password
      sss =String(req.body.password)
      ssso = req.body.email
      console.log('----------------------------------------')
      console.log(sss.String)
      console.log('----------------------------------------')
      return (req.body.password == user.password);
  
     // return bcrypt.compare(req.body.password, user.password);
  
    }).then(result=>{
      //console.log(fetchedUser)
  
  
  
      if(!result){
        return res.status(401).json({
          message: "Auth failed inccorect password"
        })
      }
  
      console.log(fetchedUser)
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id, roleId: fetchedUser.role },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id,
        roleId: fetchedUser.role
      });
    })
    .catch(e=>{
     
      console.log(e)
    
    })
  })



  
router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
    });

    User.findOne({email:req.body.email}).then(user1=>{
      if(user1){
        return res.status(401).json({
          message: "User Already Exist"
        })
      }

      user.save().then(result => {
        if(!result){
          return res.status(500).json({
            message: "Error Creating USer"
          })
        }
        res.status(201).json({
          message: "User created!",
          result: result
        });
    })
      })   
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });;
  })
 
});






module.exports = router