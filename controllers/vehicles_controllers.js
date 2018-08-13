var record = require('../models/vehicle');
var express = require('express');


var router = express.Router();

router.get('/', function (req, res) {
	res.redirect('/vehicles');
});

router.get('/vehicles', function (req, res) {
	record.selectAll(function (data) {
		var hbsObject = { vehicles: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});


router.post('/vehicles/create', function (req, res) {
	record.insertOne(['vehicle_name'], [req.body.name], function () {
		res.redirect('/vehicles');
	});
});


router.put('/vehicles/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	record.updateOne({ driven: req.body.driven }, condition, function () {
		res.redirect('/vehicles');
	});
});

router.delete('/vehicles/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	record.deleteOne(condition, function () {
		res.redirect('/vehicles');
	});
});

module.exports = router;