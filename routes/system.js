var express = require('express');
var router = express.Router();
const spawn = require('child_process').spawn;




router.get('/', function(req, res, next) {
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

});

module.exports = router;
