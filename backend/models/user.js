const mongoose = require('mongoose');

const User = mongoose.model('User', {
    
    nom: {
        type: String
    },
    prenom: {
        type: String
    },
    matricule: {
        type: String
    },

    email: {
        type: String,
        unique: true
    },

    departement: {
        type: String
      
    },
    
    role: {
        type: String
    },

    pays: {
        type: String
    },

    status: {
        type: String
    },
    
    password: {
        type: String
        
    },

    imagePath: {
        data: Buffer,
        type: String
    },


});


module.exports = User