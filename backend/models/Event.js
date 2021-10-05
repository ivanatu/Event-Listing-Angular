const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Event = new Schema({
   name: {
      type: String
   },
   date: {
      type: Date
   },
   location: {
      type: String
   },
   expectedWeather: {
      type: String
   }
}, {
   collection: 'event'
})

module.exports = mongoose.model('Event', Event)