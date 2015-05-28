var code = [74, 65, 86, 65, 83, 67, 82, 73, 80, 84],
    replayKey = 65,
    keys = [],
    timer = null,
    toggleActive = false,
    body = $('body');

$(window).on('keyup', function(e){
  if(!toggleActive){
    if(timer != null){
      clearTimeout(timer);
    }
    keys.push(e.keyCode);
    timer = setTimeout(function(){
      keys = [];
    }, 500);
  
    if(keys.join() == code.join()){
      toggleActive = true;
      body.toggleClass('cheatActive');
    }
  }
  
  if(toggleActive){
    if(e.keyCode === replayKey){
      body.toggleClass('cheatActive');
    }
  }
});