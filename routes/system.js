var express = require('express');
var path = require('path');
var router = express.Router();
var getInfo = require('../userlib/sysuname').getInfo;
var filelist = require('../userlib/filelist');

router.get('/', function(req, res, next) {
	getInfo(res);
});

router.get('/filelist', function(req, res, next) {
	filelist.getFilelists(path.join(__dirname, '../public/downloads'), function(files) {
		res.render('system/list',{title:'List', list: files})
	});
});

module.exports = router;
