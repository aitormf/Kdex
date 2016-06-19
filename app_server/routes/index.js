var express = require('express');
var ctrlPoke = require('../controllers/pokemon');
var ctrlMoves = require('../controllers/moves');
var ctrlHabs = require('../controllers/habs');
var ctrlOthers = require('../controllers/others');
var router = express.Router();

/* GET home page. */
router.get('/', ctrlPoke.pokeList);
router.get('/pokemon', ctrlPoke.pokeList);
router.get('/pokemon/:id', ctrlPoke.pokeInfo);
router.get('/movimientos', ctrlMoves.moveList);
router.get('/movimientos/:id', ctrlMoves.moveInfo);
router.get('/habilidades', ctrlHabs.habList);
router.get('/habilidades/:id', ctrlHabs.habInfo);
router.get('/calc', ctrlOthers.calc);
router.get('/about', ctrlOthers.about);

module.exports = router;
