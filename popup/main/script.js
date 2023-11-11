window.addEventListener('load', async () => {
    const res = await chrome.storage.session.get('toggled');
    if ('toggled' in res && res['toggled'] === true) {
        btn.innerText = 'ON';   
        btn.className = 'toggle on';
    } else {
        await chrome.storage.session.set({ toggled: false });
    }
})


const btn = document.getElementById('toggle');

btn.addEventListener('click', async () => {
    const { toggled } = await chrome.storage.session.get('toggled');
    if (toggled) {
        await chrome.storage.session.set({ toggled: false });
        btn.innerText = 'OFF';
        btn.className = 'toggle off';
    } else {
        await chrome.storage.session.set({ toggled: true });
        btn.innerText = 'ON';
        btn.className = 'toggle on';
    }
})