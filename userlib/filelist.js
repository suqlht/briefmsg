/**
 * http://usejsdoc.org/
 */
var fs = require('fs');
var path = require('path');

exports.getFilelists = function(path_dir,callback){

fs.readdir(path_dir, function(err, files){	
		var filelist = [];
	if(err){
		console.log(err);
		files=[]};
    files.forEach(function(file){
    	var stats = fs.statSync(path.join(path_dir,file));
    		if(stats){
    			
    			var fileobject = {};
    			fileobject.name = file;
    			fileobject.size = stats.size;
    			console.log(fileobject);

    			filelist.push(fileobject);
    				}   			
    
    });
 console.log(filelist);
   callback(filelist); 	
}
)};



