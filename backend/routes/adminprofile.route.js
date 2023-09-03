const express = require('express');
let notification = require('../models/notification');
const createError = require('http-errors');
const app = express();
const profileRoute = express.Router();
// profile model
let profile = require('../models/profile');
// Add profile
profileRoute.route('/create').post((req, res, next) => {
  profile.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All profiles
profileRoute.route('/').get((req, res) => {
  profile.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single profile
profileRoute.route('/read/:id').get((req, res) => {
  profile.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update profile
profileRoute.route('/update/:id').put((req, res, next) => {
  profile.findByIdAndUpdate(req.params.id, {
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
// Delete profile
profileRoute.route('/delete/:id').delete((req, res, next) => {
  profile.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = profileRoute;