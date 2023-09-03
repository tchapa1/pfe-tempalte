const multer = require('multer'); 
const path = require('path');
const express = require('express');
let notification = require('../models/notification');
const createError = require('http-errors');
const app = express();
const userRoute = express.Router();
app.use('/uploads', express.static('uploads'));
// user model
let user = require('../models/user');



const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Dossier où les images seront stockées
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    cb(null, Date.now() + extension); // Renommez le fichier pour éviter les doublons
  }
});
const upload = multer({ storage: storage });
// ... Autres imports et configuration ...
// Mettez cette ligne après avoir configuré le middleware body-parser pour gérer les données JSON
userRoute.use(express.json());



/*
userRoute.route('/upload/:id').post(upload.single('imagePath'), (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Aucun fichier sélectionné' });
  }

  // Mise à jour de l'utilisateur avec le chemin de l'image dans la base de données
  user.findByIdAndUpdate(req.params.id, { imagePath: req.file.path }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json({ message: 'Image de profil téléchargée avec succès' });
    }
  });
});

  */







// Add user
userRoute.route('/create').post(upload.single('imagePath'), (req, res, next) => {
  // Créer un nouvel utilisateur en utilisant les données reçues dans le corps de la requête
  const newUser = new user(req.body);
  // Si une image a été téléchargée, définir le chemin de l'image dans newUser
  if (req.file) {
    newUser.imagePath = req.file.path;
  }
  newUser.save((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  })
  const post = new notification({
    titre: "operation de creation de user",
    description: "creation user par ADMIN",
    datecreation: new Date(),
    etat: "en cours",
  })
  post.save();
});


// Update user
userRoute.route('/update/:id').put(upload.single('imagePath'), (req, res, next) => {
  // Récupérer les données de l'utilisateur à mettre à jour
  const userData = req.body;
  // Si une image a été téléchargée, mettre à jour le chemin de l'image dans userData
  if (req.file) {
    userData.imagePath = req.file.path;
  }
  // Mettre à jour les données de l'utilisateur dans la base de données
  user.findByIdAndUpdate(req.params.id, userData, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
  const post = new notification({
    titre: "Mise à jour des données utilisateur",
    description: "Mise à jour des données utilisateur par ADMIN",
    datecreation: new Date(),
    etat: "en cours",
  });
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



userRoute.route('/finddduserssss').get((req, res, next) => {
  user.find({"email":/req.body.email/},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})



userRoute.route('/find').get((req, res, next) => {
  user.find({email:req.body.email},(error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

//   user.find({"email":"admin@yahoo.fr"},(error, data) => {
//           /.*J.*/









// Delete user
userRoute.route('/delete/:id').delete((req, res, next) => {
  user.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });

  const post = new notification({
    titre: "operation de suppression de user",
    description: "suppression user par ADMIN",
    datecreation: new Date(),
    etat: "en cours",
  });
  post.save();
});


module.exports = userRoute;