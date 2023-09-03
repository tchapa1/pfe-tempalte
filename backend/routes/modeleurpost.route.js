const express = require('express');
let notification = require('../models/notification');
const createError = require('http-errors');
const app = express();
const postRoute = express.Router();
// post model
let post = require('../models/post');
// Add post
postRoute.route('/create').post((req, res, next) => {
  post.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All posts
postRoute.route('/').get((req, res) => {
  post.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single post
postRoute.route('/read/:id').get((req, res) => {
  post.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update post
postRoute.route('/update/:id').put((req, res, next) => {
  post.findByIdAndUpdate(req.params.id, {
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
// Delete post
postRoute.route('/delete/:id').delete((req, res, next) => {
  post.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = postRoute;