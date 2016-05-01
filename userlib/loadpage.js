
const exec = require('child_process').exec;

exports.saveUrlToImage=function(url,localpath, callback){

  exec('node node_modules/phantomjs/bin/phantomjs userlib/loadscript.js '+url+' '+localpath,  (error, stdout, stderr) => {
    //console.log(`stdout: ${stdout}`);
    //console.log(`stderr: ${stderr}`);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
    callback(error);
});

};
