var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/brenda', function(req, res, next){
	res.render('brenda')
})

router.get('/craig', function(req, res, next){
	res.render('craig')
})

router.get('/david', function(req, res, next){
	res.render('david')
})

router.get('/ryan', function(req, res, next){
	res.render('ryan')
})

router.get('/mathew', function(req, res, next){
	res.render('mathew')
})

router.get('/racheal', function(req, res, next){
	res.render('racheal')
})

router.get('/ethan', function(req, res, next){
	res.render('ethan')
})

module.exports = router;
