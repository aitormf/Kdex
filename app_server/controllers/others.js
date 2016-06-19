module.exports.calc = function(req, res, next) {
  res.render('index', { title: 'Calculadora' });
};

module.exports.about = function(req, res, next) {
  res.render('index', { title: 'About' });
};
