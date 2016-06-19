module.exports.moveList = function(req, res, next) {
  res.render('index', { title: 'Lista Movimientos' });
};

module.exports.moveInfo = function(req, res, next) {
  var id = req.params.id;
  res.render('index', { title: 'Movimiento: '+id });
};
