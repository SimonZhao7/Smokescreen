window.addEventListener('load', async () => {
    const res = await chrome.storage.local.get('toggled');
    if ('toggled' in res && res['toggled'] === true) {
        btn.innerText = 'ON';   
        btn.className = 'toggle on';
    } else {
        await chrome.storage.local.set({ toggled: false });
    }
})

const btn = document.getElementById('toggle');

btn.addEventListener('click', async () => {
    const { toggled } = await chrome.storage.local.get('toggled');
    if (toggled) {
        await chrome.storage.local.set({ toggled: false });
        btn.innerText = 'OFF';
        btn.className = 'toggle off';
    } else {
        await chrome.storage.local.set({ toggled: true });
        btn.innerText = 'ON';
        btn.className = 'toggle on';
    }
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    await chrome.tabs.sendMessage(tab.id, JSON.stringify({ toggled: !toggled }));
})