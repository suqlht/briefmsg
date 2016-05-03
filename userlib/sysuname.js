/**
 * http://usejsdoc.org/
 */

 const spawn = require('child_process').spawn;

exports.getInfo = function(res) {  
	  const sysinfo = spawn('uname',['-a']);
  sysinfo.stdout.on('data',(data)=>{
    res.write(`${data}`);
  });
  sysinfo.stderr.on('data',(data)=>{
	  res.write(`${data}`);
  });
  sysinfo.on('close',(code)=>{
	  res.end(`child process exited with code ${code}`);
  });
}  
