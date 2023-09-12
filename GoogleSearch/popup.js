document.addEventListener('DOMContentLoaded', function () {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function () {
		
        chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function(tabs) {
            d = document;
            var query= document.getElementById("query").value;
            window.open('https://www.google.com/search?q='+query, 'blank');
        });
    });
}, false);  

 