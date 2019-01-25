var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Kinvo: Programa de desenvolvimento de talentos.' });
});

router.get('/quest1', function(req, res, next) {
  res.render('quest1', { title: 'Kinvo: Questão 1.' });
});
/* GET quest 2. */
router.get('/quest2', function(req, res, next) {
  res.render('quest2', { title: 'Kinvo: Questão 2.' });
});
/* GET quest 3. */
router.get('/quest3', function(req, res, next) {
  res.render('quest3', { title: 'Kinvo: Questão 3.' });
});
/* GET quest 4. */
router.get('/quest4', function(req, res, next) {
  res.render('quest4', { title: 'Kinvo: Questão 4.' });
});
/* GET quest 5. */
router.get('/quest5', function(req, res, next) {
  res.render('quest5', { title: 'Kinvo: Questão 5.' });
});




module.exports = router;
