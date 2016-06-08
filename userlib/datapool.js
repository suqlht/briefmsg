var redis = require('redis');
var client = redis.createClient('6379', '127.0.0.1');

client.on("error", function(error) {
	console.log(error);
});

exports.setValue = function( getvalue,callback) {
	
	client.incr('counter', 
		function(err, id){
			client.set(id,"init",function(err, reply){
				if(err){
					callback(-1);	
				}else{
					callback(id);	
				}
				
				
				
			});
			
			
			getvalue(
			function(files){
				client.set(id,JSON.stringify(files) , function(err, reply){
					if(err){
					console.log(err);	
					}
					
				});
			}	
			);
			
		
		}
	);
}

exports.getValue = function(key, callback) {
	console.log(key);
	client.get(key, function(err, reply) {
		if (err) {
			callback(err);
		} else {
			callback(reply);
		}
	});
}