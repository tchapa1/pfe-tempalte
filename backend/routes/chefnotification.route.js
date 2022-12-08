const express = require('express');
const app = express();
const notificationRoute = express.Router();
// notification model
let notification = require('../models/notification');
// Add notification
notificationRoute.route('/create').post((req, res, next) => {
  notification.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get All notifications
notificationRoute.route('/').get((req, res) => {
  notification.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single notification
notificationRoute.route('/read/:id').get((req, res) => {
  notification.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update notification
notificationRoute.route('/update/:id').put((req, res, next) => {
  notification.findByIdAndUpdate(req.params.id, {
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
// Delete notification
notificationRoute.route('/delete/:id').delete((req, res, next) => {
  notification.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = notificationRoute;