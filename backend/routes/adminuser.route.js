const express = require('express');
const app = express();
const userRoute = express.Router();
// user model
let user = require('../models/user');
// Add user
userRoute.route('/create').post((req, res, next) => {
  user.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All users
userRoute.route('/').get((req, res) => {
  user.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single user
userRoute.route('/read/:id').get((req, res) => {
  user.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

userRoute.route('/find').get((req, res, next) => {
  user.find({email:req.body.email},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//   user.find({"email":"admin@yahoo.fr"},(error, data) => {
//           /.*J.*/

// Update user
userRoute.route('/update/:id').put((req, res, next) => {
  user.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})
// Delete user
userRoute.route('/delete/:id').delete((req, res, next) => {
  user.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = userRoute;