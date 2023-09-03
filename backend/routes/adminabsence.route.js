const express = require('express');
let notification = require('../models/notification');
const createError = require('http-errors');
const app = express();
const absenceRoute = express.Router();



// absence model
let absence = require('../models/absence');
// Add absence
absenceRoute.route('/create').post((req, res, next) => {
  absence.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })


  const post = new notification({
    titre: "operation de creation de absence",
    description: "creation absence par ADMIN",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();




});


 absenceRoute.route('/find').get((req, res, next) => {
    absence.find({"idemploye":/req.body.idemploye/},(error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })





// Get All absences
absenceRoute.route('/').get((req, res) => {
  absence.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single absence
absenceRoute.route('/read/:id').get((req, res) => {
  absence.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update absence
absenceRoute.route('/update/:id').put((req, res, next) => {
  absence.findByIdAndUpdate(req.params.id, {
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
    titre: "operation de mise a jour d absence",
    description: "Mise a jour absence par ADMIN",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();



})
// Delete absence
absenceRoute.route('/delete/:id').delete((req, res, next) => {
  absence.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });

  const post = new notification({
    titre: "operation de suppression de absence",
    description: "suppression absence par ADMIN",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();
})


module.exports = absenceRoute;