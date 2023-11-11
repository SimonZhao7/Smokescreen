var target = document.querySelector('body');

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      const body = document.getElementsByTagName('body')[0];
      const images = document.getElementsByTagName('img');
    });
});

observer.observe(target, {
  attributes: true, 
  childList: true, 
  characterData: true,
  subtree: true
}); 