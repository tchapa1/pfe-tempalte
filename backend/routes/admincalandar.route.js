const express = require('express');
let notification = require('../models/notification');
const createError = require('http-errors');
const app = express();
const calandarRoute = express.Router();

// calandar model
let calandar = require('../models/calandar');


// Add calandar
calandarRoute.route('/create').post((req, res, next) => {
  calandar.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })


});
// Get All calandars
calandarRoute.route('/').get((req, res) => {
  calandar.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})




 calandarRoute.route('/find').get((req, res, next) => {
    calandar.find({idemploye:req.body.idemploye},(error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })





// Get single calandar
calandarRoute.route('/read/:id').get((req, res) => {
  calandar.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update calandar
calandarRoute.route('/update/:id').put((req, res, next) => {
  calandar.findByIdAndUpdate(req.params.id, {
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
    titre: "operation de mise a jour de calandar",
    description: "Mise a jour calandar par ADMIN",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();




})
// Delete calandar
calandarRoute.route('/delete/:id').delete((req, res, next) => {
  calandar.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });
  

  const post = new notification({
    titre: "operation de suppression de calandar",
    description: "suppression calandar par ADMIN",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();





})
module.exports = calandarRoute;