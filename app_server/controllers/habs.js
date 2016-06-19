module.exports.habList = function(req, res, next) {
  res.render('index', { title: 'Lista Habilidades' });
};

module.exports.habInfo = function(req, res, next) {
  var id = req.params.id;
  res.render('index', { title: 'Habilidad: '+id });
};
