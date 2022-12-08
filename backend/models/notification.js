



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let notification = new Schema({
   titre: {
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
   collection: 'notifications'
})
module.exports = mongoose.model('notification', notification)