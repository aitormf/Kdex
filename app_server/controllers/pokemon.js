module.exports.pokeList = function(req, res, next) {
  res.render('index', { title: 'Lista Pokemon' });
};

module.exports.pokeInfo = function(req, res, next) {
  var id = req.params.id;
  res.render('index', { title: 'Pokemon: '+id });
};
