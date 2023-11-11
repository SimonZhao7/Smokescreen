var target = document.querySelector('body');
console.log(target);

var observer = new MutationObserver(function(mutations) {
    const images = document.getElementsByTagName("img");
    const videos = document.getElementsByTagName("video");
    mutations.forEach(() => {
      for (let i = Math.max(videos.length, images.length) - 1; i >= 0 ; i--){
        if (i < images.length) images[i].style.display = "none";
        if (i < videos.length) videos[i].style.display = "none";
      };
    });
});

observer.observe(target, {
  attributes: true, // monitors changes in attributes within the 'target' and descendants
  childList: true, // observes changes in direct children of 'target'
  characterData: true, // observes changes in 'textContent' of 'target' and descendants
  subtree: true // extends observation to the entire subtree of 'target'
});