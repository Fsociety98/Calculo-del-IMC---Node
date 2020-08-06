var express = require('express');
var router = express.Router();

router.use(express.static('public'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cálculo del IMC', masa: 0 });
});

router.post('/calcular', function(req, res, next) {
  var peso = req.body.peso;
  var altura = req.body.altura;

  var indice = (peso / altura);

  res.render('index', { title: 'Cálculo del IMC', masa: indice });
});

module.exports = router;
