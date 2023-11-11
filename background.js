// chrome.runtime.onInstalled.addListener(async () => {
//   console.log('ran');
//   try {
//     chrome.storage.session.setAccessLevel({ accessLevel: "TRUSTED_AND_UNTRUSTED_CONTEXTS" });
//     const res = chrome.storage.session.get('toggled');
//     if (Object.keys(res) == 0) {
//       chrome.storage.session.set({ toggled: false });
//     }
//   } catch {
//     console.log('error');
//   }
// })