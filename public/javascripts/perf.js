(
function(){
  var printtimes = function(){
    console.log(performance.timing.loadEventEnd - performance.timing.navigationStart);
  };
  var executor = function(){
    window.addEventListener("load",printtimes);

  }
  return executor;
}
)();
