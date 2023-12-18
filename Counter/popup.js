// Sayacı saklamak için bir değişken
var counter = 0;

window.onload = function  ( ) {
    document.getElementById('increase-button').innerHTML = chrome.i18n.getMessage("increase")
    document.getElementById('reset-button').innerHTML = chrome.i18n.getMessage("reset")
}

// Sayacı artıran fonksiyon
function increaseCounter() {
    counter++;
    updateCounterDisplay();
    saveCounterToStorage();
}

// Sayacı güncelleyen fonksiyon
function updateCounterDisplay() {
    // Sayacın güncel değerini HTML elementine yaz
    document.getElementById('counter-display').innerHTML = counter;
}

// Sayacı chrome.storage.local üzerinde saklayan fonksiyon
function saveCounterToStorage() {
    chrome.storage.local.set({ 'counter': counter }, function () {
        console.log('Counter value saved to storage:', counter);
    });
}

// chrome.storage.local'ten sayacı yükleyen fonksiyon
function loadCounterFromStorage() {
    chrome.storage.local.get('counter', function (data) {
        if (data.counter !== undefined) {
            counter = data.counter;
            updateCounterDisplay();
        }
    });
}

// HTML sayfasındaki arttır butonunu bul ve tıklama olayını dinle
document.addEventListener('DOMContentLoaded', function () {
    var increaseButton = document.getElementById('increase-button');
    if (increaseButton) {
        increaseButton.addEventListener('click', function () {
            increaseCounter();
        });
    }

    // Sayacı depodan yükle
    loadCounterFromStorage();
});

//Sayacı sıfırla
function resetCounterFromStorage() {
    chrome.storage.local.remove('counter',function() {
        counter = 0
        console.log('Counter value deleted from storage:', counter);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    var resetButton = document.getElementById('reset-button');
    if (resetButton) {
        resetButton.addEventListener('click', function () {
            resetCounterFromStorage();
            document.getElementById('counter-display').innerHTML = 0;
        });
    } 
});