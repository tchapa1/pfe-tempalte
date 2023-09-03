const express = require('express');
let notification = require('../models/notification');
const createError = require('http-errors');
const app = express();
const congeRoute = express.Router();
// conge model
let conge = require('../models/conge');
// Add conge
congeRoute.route('/create').post((req, res, next) => {
  conge.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })


  const post = new notification({
    titre: "operation de creation de conge",
    description: "creation conge par CHEF",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();






});
// Get All conges
congeRoute.route('/').get((req, res) => {
  conge.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single conge
congeRoute.route('/read/:id').get((req, res) => {
  conge.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update conge
congeRoute.route('/update/:id').put((req, res, next) => {
  conge.findByIdAndUpdate(req.params.id, {
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
    titre: "operation de mise a jour de conge",
    description: "mise a jour conge par CHEF",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();



})
// Delete conge
congeRoute.route('/delete/:id').delete((req, res, next) => {
  conge.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })

  const post = new notification({
    titre: "operation de suppression de conge",
    description: "suppression conge par CHEF",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();



})
module.exports = congeRoute;