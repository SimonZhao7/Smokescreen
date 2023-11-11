var target = document.querySelector('body');

var observer = new MutationObserver(async function(mutations) {
  const res = await chrome.storage.local.get('toggled');
  if (res['toggled'] !== undefined && res['toggled'] == true) {
    const images = document.getElementsByTagName("img");
    const videos = document.getElementsByTagName("video");
    for (let i = Math.max(videos.length, images.length) - 1; i >= 0 ; i--){
      let words = await get_hidden();
      
      // Pesudocode
      switch('youtube.com') {
        case 'youtube.com':
          //let yt_data = youtube request json file.
          const response = await fetch('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDcaS8O3obhKz61gZcNTmoOcFtmbGQlZXc&fields=items(snippet(title,description,tags))&part=snippet&id=0y_HefNkmnk');
          if (response.status == 200){
            const yt_data = await response.json();
            const content = yt_data['items'][0]['snippet']['title'] + yt_data['items'][0]['snippet']['description'];
            if (check_similarity(content, words)){
              if (i < images.length) images[i].style.display = "none";
              if (i < videos.length) {
                  videos[i].style.display = "none";
                  videos[i].pause();
                  videos[i].autoplay = false;
                  videos[i].controls = false;
              } else {
                continue;
              }
            }
          } else {
            console.log('errored');
          }
          break;
        case 'twitter.com':
          // code block
          break;
        case 'instagram.com':
          
          break;
        default:
          // code
      }
      if (url == 'youtube.com'){
        if (check_similarity(images[i].getAttribute("alt"), words)) {
          if (i < images.length) images[i].style.display = "none";
          if (i < videos.length) {
              videos[i].style.display = "none";
              videos[i].pause();
              videos[i].autoplay = false;
              videos[i].controls = false;
          }
        } else {
          continue;
        }

    }
  }
  }
});

async function get_hidden(){
  let res = await new Promise((resolve, reject) => {
     chrome.storage.sync.get('hiddenWords', result => {
        if (chrome.runtime.lastError) {
           reject(chrome.runtime.lastError);
        } else {
           resolve(result);
        }
    });
 });
 return res['hiddenWords'] ?? [];
}

function check_similarity(string, words) {
  if (!string || words.length === 0) {
    return false;
  }

  string = string.toLowerCase();

  for (let i = 0; i < words.length; ++i) {
      if (string.toLowerCase().includes(words[i].toLowerCase())){
        return true;
      }
  }
  return false;
}


observer.observe(target, {
  attributes: true, // monitors changes in attributes within the 'target' and descendants
  childList: true, // observes changes in direct children of 'target'
  characterData: true, // observes changes in 'textContent' of 'target' and descendants
  subtree: true // extends observation to the entire subtree of 'target'
});


chrome.runtime.onMessage.addListener(async (msg) => {
  const { toggled } = JSON.parse(msg);
  const images = document.getElementsByTagName("img");
  const videos = document.getElementsByTagName("video");

  for (let i = Math.max(videos.length, images.length) - 1; i >= 0 ; i--){
    let words = await get_hidden();

    if (toggled && check_similarity(images[i].getAttribute("alt"), words)) {
      if (i < images.length) images[i].style.display = "none";
      if (i < videos.length) {
          videos[i].style.display = "none";
          videos[i].pause();
          videos[i].autoplay = false;
          videos[i].controls = false;
      }
    } else {
      if (i < images.length) images[i].style.display = "block";
      if (i < videos.length) {
          videos[i].style.display = "block";
          videos[i].autoplay = true;
          videos[i].controls = true;
      }
    }
  }
})