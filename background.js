if (chrome.tabs && chrome.tabs.executeScript) {
  chrome.tabs.executeScript({code: 'alert("Hello World!");'});
}