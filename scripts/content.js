var target = document.querySelector('body');

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        console.log('DOM changed: ', mutation);
        // Your code here
    });
});

observer.observe(target, {
  attributes: true, 
  childList: true, 
  characterData: true,
  subtree: true
}); 