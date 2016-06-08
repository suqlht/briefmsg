var express = require('express');
var path = require('path');
var router = express.Router();
var getInfo = require('../userlib/sysuname').getInfo;
var filelist = require('../userlib/filelist');
var dp = require('../userlib/datapool');

router.get('/', function(req, res, next) {
	getInfo(res);
});

router.get('/data/:key', function(req, res, next) {
	dp.getValue(req.params.key, function(v) {
		res.send(v);
	});
});

router.get('/filelist', function(req, res, next) {
	filelist.getFilelists(path.join(__dirname, '../public/downloads'),
			function(files) {
				res.render('system/list', {
					title : 'List',
					list : files
				});
			});
});

router.get('/nglist', function(req, res, next) {
	var getresult = function(callback) {
		filelist.getFilelists(path.join(__dirname, '../public/downloads'),
				function(files) {
					callback(files);
				});
	};
	dp.setValue(getresult, function(key) {

		if (key === -1) {
			res.send('err');
		} else {

			res.render('system/nglist', {
				title : 'List',
				key : key
			});
		}

	});

});

module.exports = router;
