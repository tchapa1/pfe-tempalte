



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let avancementtache = new Schema({
   titre: {
      type: String
   },
   description: {
      type: String
   },
   idtache: {
      type: String
   },
   idprojet: {
      type: String
   },
   datecreation: {
      type: String
   }
}, {
   collection: 'avancementtaches'
})
module.exports = mongoose.model('avancementtache', avancementtache)