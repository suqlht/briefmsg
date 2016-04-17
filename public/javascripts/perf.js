(
function(){
  var printtimes = function(){
    console.log(performance.timing.loadEventStart - performance.timing.navigationStart);
  };
  window.addEventListener("load",printtimes,false);
  }
)();
