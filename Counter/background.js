if (chrome && chrome.storage && chrome.storage.local) {
    chrome.storage.local.get('counter', function (data) {
        if (data.counter !== undefined) {
            counter = data.counter;
            updateCounterDisplay();
        }
    });
} else {
    console.error("chrome.storage.local not available.");
}