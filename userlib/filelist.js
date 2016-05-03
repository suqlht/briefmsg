/**
 * http://usejsdoc.org/
 */
var fs = require('fs');
exports.getFilelists = function(path,callback){
fs.readdir(path, function(err, files){	
	if(err){
		console.log(err);
		files=[]};
   callback(files); 	
}
)};

