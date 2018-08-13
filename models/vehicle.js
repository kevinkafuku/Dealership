var orm = require('../config/orm.js');


// Model uses record specific inputs to call ORM functions
// ==============================================================================
var vehicle = {
	selectAll: function (cb) {
		orm.selectAll('vehicles', function (res) {
			cb(res);
		});
    },
    
	insertOne: function (cols, vals, cb) {
		orm.insertOne('vehicles', cols, vals, function (res) {
			cb(res);
		});
	},
	updateOne: function (objColVals, condition, cb) {
		orm.updateOne('vehicles', objColVals, condition, function (res) {
			cb(res);
		});
	},
	deleteOne: function (condition, cb) {
		orm.deleteOne('vehicles', condition, function (res) {
			cb(res);
		});
	}
};

module.exports = vehicle;