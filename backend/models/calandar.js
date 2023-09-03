
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let calandar = new Schema({
   idcalandar: {
      type: String
   },
   title: {
      type: String
   },
   start: {
      type: String
   }
   
}, {
   collection: 'calandars'
})
module.exports = mongoose.model('calandar', calandar)