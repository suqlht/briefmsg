(
function(){
  var printtimes = function(){
    setTimeout(function(){console.log(performance.timing.loadEventEnd - performance.timing.navigationStart)},1000);
  };
  window.addEventListener("load",printtimes,false);
  }
)();
