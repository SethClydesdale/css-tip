/* OPTIONAL SCRIPT FOR CONVERTING DEFAULT TITLE ATTRIBUTES INTO DATASET ATTRIBUTES */
(function() {
  
  function replaceTooltip() {
    for (var all = document.getElementsByTagName('*'), i = 0, j = all.length; i < j; i++) {
      if (all[i].title) {
        all[i].dataset.csstip = all[i].title;
        all[i].title = '';
      }
    }
  };
  
  if (document.addEventListener) document.addEventListener('DOMContentLoaded', replaceTooltip);
  else if (document.attachEvent) document.attachEvent('onDOMContentLoaded', replaceTooltip);
  else if (window.console) console.error('Unable to bind events to the document');
  
})();
