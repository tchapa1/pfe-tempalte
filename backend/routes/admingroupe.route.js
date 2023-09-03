const express = require('express');
let notification = require('../models/notification');
const createError = require('http-errors');
const app = express();
const groupeRoute = express.Router();
// groupe model
let groupe = require('../models/groupe');
// Add groupe
groupeRoute.route('/create').post((req, res, next) => {
  groupe.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })

  const post = new notification({
    titre: "operation de creation de groupe",
    description: "creation groupe par ADMIN",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();





});
// Get All groupes
groupeRoute.route('/').get((req, res) => {
  groupe.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single groupe
groupeRoute.route('/read/:id').get((req, res) => {
  groupe.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update groupe
groupeRoute.route('/update/:id').put((req, res, next) => {
  groupe.findByIdAndUpdate(req.params.id, {
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
    titre: "operation de mise a jour de groupe",
    description: "mise a jour groupe par ADMIN",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();




})
// Delete groupe
groupeRoute.route('/delete/:id').delete((req, res, next) => {
  groupe.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });


  const post = new notification({
    titre: "operation de suppression de groupe",
    description: "suppression groupe par ADMIN",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();



})
module.exports = groupeRoute;