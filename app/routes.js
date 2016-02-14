var Album = require('./album.js')
module.exports = function(app, passport) {
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
        Album.find(function(err, todos) {
          if (err)
            res.send(err)
          res.json(todos);
        });
    })
  });

  app.get('/', function(req, res){
    res.sendfile('./public/index.html');
  });

}
