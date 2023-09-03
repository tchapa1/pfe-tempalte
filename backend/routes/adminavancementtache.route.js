const express = require('express');
let notification = require('../models/notification');
const createError = require('http-errors');
const app = express();
const avancementtacheRoute = express.Router();
// avancementtache model
let avancementtache = require('../models/avancementtache');
// Add avancementtache
avancementtacheRoute.route('/create').post((req, res, next) => {
  avancementtache.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })




});
// Get All avancementtaches
avancementtacheRoute.route('/').get((req, res) => {
  avancementtache.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single avancementtache
avancementtacheRoute.route('/read/:id').get((req, res) => {
  avancementtache.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update avancementtache
avancementtacheRoute.route('/update/:id').put((req, res, next) => {
  avancementtache.findByIdAndUpdate(req.params.id, {
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
    titre: "operation de mise a jour de avancementtache",
    description: "mise a jour avancementtache par ADMIN",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();



})
// Delete avancementtache
avancementtacheRoute.route('/delete/:id').delete((req, res, next) => {
  avancementtache.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });

  const post = new notification({
    titre: "operation de suppression de avancementtache",
    description: "supression avancementtache par ADMIN",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();





})
module.exports = avancementtacheRoute;