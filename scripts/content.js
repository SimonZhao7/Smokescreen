var target = document.querySelector('body');

var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      const body = document.getElementsByTagName('body')[0];
      const images = document.getElementsByTagName('img');
  
      for (let i = 0; i < images.length; i++) {
          const { left, top, right, bottom } = images[i].getBoundingClientRect();
          const width = right - left;
          const height = bottom - top;
  
          const box = document.createElement('div');
          box.style.width = `${width}px`;
          box.style.height = `${height}px`;
          box.style.backgroundColor = 'black';
          box.style.position = 'absolute';
          box.style.top = `${top}px`;
          box.style.left = `${left}px`;
          body.appendChild(box);
      }  
      imgCnt = images.length;
    });
});

observer.observe(target, {
  attributes: true, 
  childList: true, 
  characterData: true,
  subtree: true
}); 