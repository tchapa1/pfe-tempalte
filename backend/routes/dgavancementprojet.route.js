const express = require('express');
let notification = require('../models/notification');
const createError = require('http-errors');
const app = express();
const avancementprojetRoute = express.Router();
// avancementprojet model
let avancementprojet = require('../models/avancementprojet');
// Add avancementprojet
avancementprojetRoute.route('/create').post((req, res, next) => {
  avancementprojet.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })

  const post = new notification({
    titre: "operation de creation de avancementprojet",
    description: "creation avancementprojet par DG",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();


});
// Get All avancementprojets
avancementprojetRoute.route('/').get((req, res) => {
  avancementprojet.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single avancementprojet
avancementprojetRoute.route('/read/:id').get((req, res) => {
  avancementprojet.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update avancementprojet
avancementprojetRoute.route('/update/:id').put((req, res, next) => {
  avancementprojet.findByIdAndUpdate(req.params.id, {
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
    titre: "operation de mise a jour de avancementprojet",
    description: "mise a jour avancementprojet par DG",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();





})
// Delete avancementprojet
avancementprojetRoute.route('/delete/:id').delete((req, res, next) => {
  avancementprojet.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })

  const post = new notification({
    titre: "operation de suppression de avancementprojet",
    description: "suppression avancementprojet par DG",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();




      
})
module.exports = avancementprojetRoute;