chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        return {
            cancel: true
        };
    },
    {
        urls: [
            '<all_urls>',
        ],
        types: [
            'image'
        ]
    },
    ['blocking']);