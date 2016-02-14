var mongoose = require('mongoose');

var Album = mongoose.model('Album', {
  title : String
});
module.exports = Album;
