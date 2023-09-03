const express = require('express');
const app = express();
const affectationgroupeRoute = express.Router();
const createError = require('http-errors');


let notification = require('../models/notification');
// affectationgroupe model
let affectationgroupe = require('../models/affectationgroupe');
// Add affectationgroupe
affectationgroupeRoute.route('/create').post((req, res, next) => {
  affectationgroupe.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});


 affectationgroupeRoute.route('/find').get((req, res, next) => {
    affectationgroupe.find({"idemploye":/req.body.idemploye/},(error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })





// Get All affectationgroupes
affectationgroupeRoute.route('/').get((req, res) => {
  affectationgroupe.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})




affectationgroupeRoute.route('/readsssssss/:id').get((req, res) => {
  affectationgroupe.find({idgroupe:req.params.id}, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



// Get single affectationgroupe
affectationgroupeRoute.route('/read/:id').get((req, res) => {
  affectationgroupe.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update affectationgroupe
affectationgroupeRoute.route('/update/:id').put((req, res, next) => {
  affectationgroupe.findByIdAndUpdate(req.params.id, {
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
// Delete affectationgroupe
affectationgroupeRoute.route('/delete/:id').delete((req, res, next) => {
  affectationgroupe.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });

  

  const post = new notification({
    titre: "operation de suppression de affectationgroupe",
    description: "suppression affectationgroupe par ADMIN",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();
})

affectationgroupeRoute.route('/delete/group/:groupId').delete((req, res, next) => {
  const groupId = req.params.groupId;

  // Delete all affectations with the given group ID
  affectationgroupe.deleteMany({ idgroupe: groupId }, (error) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({ message: 'All affectations for the group have been deleted.' });
    }
  });
});

affectationgroupeRoute.route('/adduser/:groupId/:userId').put((req, res, next) => {
  const groupId = req.params.groupId;
  const userId = req.params.userId;

  // Add user to the group
  affectationgroupe.create({ idgroupe: groupId, idemploye: userId }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json(data);
    }
  });
});

affectationgroupeRoute.route('/removeuser/:groupId/:userId').put((req, res, next) => {
  const groupId = req.params.groupId;
  const userId = req.params.userId;

  // Remove user from the group
  affectationgroupe.deleteOne({ idgroupe: groupId, idemploye: userId }, (error) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({ message: 'User removed from the group.' });
    }
  });
});



module.exports = affectationgroupeRoute;