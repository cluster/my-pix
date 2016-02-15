var Album = require('./album.js')
  , Photo = require('./photo.js');

module.exports = function(app, passport) {

  app.get('/', function(req, res){
    res.sendfile('./public/index.html');
  });

  //ALBUM management
  //listing albums
  app.get('/api/albums', function(req, res){
    Album.find(function(err, albums){
      if(err)
        res.send(err);
      res.json(albums);
    });
  });

  //creating an album
  app.post('/api/albums', function(req, res){
    Album.create({
      title : req.body.title
    }, function(err, albums){
        if(err)
          req.send(err);
        res.json(albums);
    })
  });

  //deleting an album
  app.delete('/api/albums/:id', function(req, res){
    Album.remove({
      _id : req.params.id
    }, function(err, albums){
        if(err)
          res.send(err);
        //not very efficient, change that later...
        Album.find(function(err, albums) {
          if (err)
            res.send(err)
          res.json(albums);
        });
    })
  });

  //listing photos
  app.get('/api/photos', function(req, res){
    Photo.find(function(err, photos){
      if(err)
        res.send(err);
      res.json(photos);
    });
  });

  //creating an photos
  app.post('/api/photos', function(req, res){
    Photo.create({
      title : req.body.title
    }, function(err, photos){
        if(err)
          req.send(err);
        res.json(photos);
    })
  });

  //deleting an photos
  app.delete('/api/photos/:id', function(req, res){
    Photo.remove({
      _id : req.params.id
    }, function(err, photos){
        if(err)
          res.send(err);
        //not very efficient, change that later...
        Photo.find(function(err, photos) {
          if (err)
            res.send(err)
          res.json(photos);
        });
    })
  });

}
