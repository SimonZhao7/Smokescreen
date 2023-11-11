var target = document.querySelector('body');

var observer = new MutationObserver(async function(mutations) {
    const res = await chrome.storage.local.get('toggled');
    if (res['toggled'] !== undefined && res['toggled'] == true) {
      const images = document.getElementsByTagName("img");
      const videos = document.getElementsByTagName("video");
      for (let i = Math.max(videos.length, images.length) - 1; i >= 0 ; i--){
        if (i < images.length) images[i].style.display = "none";
        if (i < videos.length) {
          videos[i].style.display = "none";
          videos[i].pause();
          videos[i].autoplay = false;
          videos[i].controls = false;
        }
      };
    }
});

observer.observe(target, {
  attributes: true, // monitors changes in attributes within the 'target' and descendants
  childList: true, // observes changes in direct children of 'target'
  characterData: true, // observes changes in 'textContent' of 'target' and descendants
  subtree: true // extends observation to the entire subtree of 'target'
});

chrome.runtime.onMessage.addListener(msg => {
  const { toggled } = JSON.parse(msg);
  const images = document.getElementsByTagName("img");
  const videos = document.getElementsByTagName("video");
  for (let i = Math.max(videos.length, images.length) - 1; i >= 0 ; i--){
    if (i < images.length) images[i].style.display = toggled ? "none" : "block";
    if (i < videos.length) {
      videos[i].style.display = toggled ? "none" : "block";
      if (toggled) videos[i].pause();
      videos[i].autoplay = !toggled;
      videos[i].controls = !toggled;
    }
  };
})