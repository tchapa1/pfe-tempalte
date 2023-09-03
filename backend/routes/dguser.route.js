const express = require('express');
let notification = require('../models/notification');
const createError = require('http-errors');
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



  const post = new notification({
    titre: "operation de creation de user",
    description: "creation user par DG",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();


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

  const post = new notification({
    titre: "operation de mise a jour de user",
    description: "mise a jour user par DG",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();





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

  const post = new notification({
    titre: "operation de suppression de user",
    description: "suppression user par DG",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();


      
})
module.exports = userRoute;