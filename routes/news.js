var express = require('express');
var loadpage = require('../userlib/loadpage');
var sites = require('../userlib/siteslist').sites;

var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
	var imagepath = 'public/images/snapshot.png';
	var url = 'http://news.baidu.com';
	if(sites[req.params.id]){url = sites[req.params.id];}

	
	loadpage.saveUrlToImage(url, imagepath, function(err) {
		if (err) {
			res.end(err);
		} else {
			res.render('news', {
				title : 'News',
				url:url,
				imgsrc : 'snapshot.png'
			});
		}
	});

	// res.end(__dirname);
});

module.exports = router;
