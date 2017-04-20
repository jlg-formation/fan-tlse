var express = require('express');
var router = express.Router();
module.exports = router;

router.use('/s1', function(req, res, next) {
	setTimeout(function() {
		res.json({
			result: 's1'
		});
	}, 2000);
});

router.use('/s2', function(req, res, next) {
	setTimeout(function() {
		res.json({
			result: 's2'
		});
	}, 2000);
});

router.use('/s3', function(req, res, next) {
	setTimeout(function() {
		res.json({
			result: 's3'
		});
	}, 3000);
});

router.use('/s4', function(req, res, next) {
	setTimeout(function() {
		res.json({
			result: 's4'
		});
	}, 1000);
});

router.use('/s5', function(req, res, next) {
	setTimeout(function() {
		res.json({
			result: 's5'
		});
	}, 3000);
});

router.use('/s6', function(req, res, next) {
	setTimeout(function() {
		res.json({
			result: 's6'
		});
	}, 1000);
});
