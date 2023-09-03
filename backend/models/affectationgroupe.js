



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let affectationgroupe = new Schema({
   idemploye: {
      type: String
   },
   idgroupe: {
      type: String
   }

}, {
   collection: 'affectationgroupes'
})
module.exports = mongoose.model('affectationgroupe', affectationgroupe)