var mongoose = require('mongoose');

var Photo = mongoose.model('Photo', {
  url : String,
  date: { type: Date},
  timezone: String,
  location: Array,
  tags: Array,
  people: Array,
  albums: Array,
  isMarked: Boolean
});
module.exports = Photo;
