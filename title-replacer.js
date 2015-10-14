(function() {

 
  var Defaults = {
    effect: null,
    placement: "bottom",
    theme:"light"
  };
  
  function csstips(opts,target) {
    if(!opts) {
       opts = Defaults; 
       target = "*";
    } 
    else if(!target) {
      target = "*";
    }
    
    return new CSSTips(opts,target);
  }
  
  function CSSTips(opts,target) {
    for(var options in Defaults) 
    {
      if(opts.hasOwnProperty(options)) {
        this[options] = opts[options];
      } else {
        this[options] = Defaults[options];
      }
    }
    var all = document.querySelectorAll(target),len = all.length;
    while(len--)
    {
      
      
      if( all[len].title) {
         if(!all[len].dataset.hasOwnProperty("csstip") &&
            !all[len].dataset.hasOwnProperty("csstipOff")
           ) {
          all[len].setAttribute("data-csstip",all[len].title);
          all[len].title = null;
        
          if(this.effect != null)
            all[len].setAttribute("data-csstip-effect",this.effect);
        
          if(this.placement != "bottom") 
            all[len].setAttribute("data-csstip-placement",this.placement);
          
           
          all[len].setAttribute("data-csstip-theme",this.theme);
        }
      }
    }
    return this;
  }
  
  
  window.csstips = csstips;
})();

/* // How to initialize csstip

document.addEventListener('DOMContentLoaded',function() {
  csstips({
    effect:"fadein",
    placement:"top",
    theme:"dark"
  });
});

*/
