const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let groupe = new Schema({
   nom: {
      type: String
   },
   description: {
      type: String
   },
   datecreation: {
      type: String
   },
   etat: {
      type: String
   }
}, {
   collection: 'groupes'
})
module.exports = mongoose.model('groupe', groupe)