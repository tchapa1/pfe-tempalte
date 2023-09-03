



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let projet = new Schema({
   nom: {
      type: String
   },
   description: {
      type: String
   },
   datecreation: {
      type: String
   },
   datefin: {
      type: String
   },
   etat: {
      type: String
   },
   idgroupe: {
      type: String
   },
   nbheures: {
      type: String
   }
}, {
   collection: 'projets'
})
module.exports = mongoose.model('projet', projet)