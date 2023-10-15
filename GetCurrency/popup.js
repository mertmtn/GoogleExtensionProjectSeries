const xmlUrl = 'https://www.tcmb.gov.tr/kurlar/today.xml';

fetch(xmlUrl)
  .then(response => response.text())
  .then(xmlText => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

    const currencyNodes = xmlDoc.getElementsByTagName('Currency');
    document.getElementById("tableTitle").innerText = chrome.i18n.getMessage("name")
    document.getElementById("thCurrency").innerText = chrome.i18n.getMessage("thCurrency")
    document.getElementById("thBuying").innerText = chrome.i18n.getMessage("thBuying")
    document.getElementById("thSelling").innerText = chrome.i18n.getMessage("thSelling")
    for (let i = 0; i < currencyNodes.length; i++) {
      const currencyNode = currencyNodes[i];
      const currencyName = currencyNode.querySelector('Isim').textContent;
      const currencyForexSelling = currencyNode.querySelector('ForexSelling').textContent;
      const currencyForexBuying = currencyNode.querySelector('ForexBuying').textContent;

      const row = document.createElement('tr');
  
      const firstNameCell = document.createElement('td');
      firstNameCell.textContent = currencyName;
      row.appendChild(firstNameCell);
      
      const lastNameCell = document.createElement('td');
      lastNameCell.textContent = currencyForexBuying;
      row.appendChild(lastNameCell);
      
      const ageCell = document.createElement('td');
      ageCell.textContent = currencyForexSelling;
      row.appendChild(ageCell);
      
      tableBody.appendChild(row);
    }
  })
  .catch(error => {
    console.error('XML verisi çekilirken hata oluştu:', error);
  });