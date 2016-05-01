
var page = require('webpage').create(),
  system = require('system');

if(system.args.length < 2){
  console.log('params error!')
  phantom.exit(1);
}


var address = system.args[1];
var imagepath = system.args[2];

page.settings.userAgent = 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36';
page.viewportSize = {
  width: 1200,
  height: 720
};

page.open(address, function(status) {
  if (status !== 'success') {
      phantom.exit(1);
  } else {
    page.render(imagepath);
  phantom.exit(0);
  }

});
