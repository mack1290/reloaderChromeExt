'use strict'


document.addEventListener('DOMContentLoaded', function() {
    var startReloadButton = document.getElementById('startReload');
    var stopReloadButton = document.getElementById('stopReload');
    var refreshInterval;
    startReloadButton.addEventListener('click', function() {
        var reloadTime = 1;
        reloadTime = isNaN(document.getElementById('reloadTimeMins').value) ? 1 : document.getElementById('reloadTimeMins').value;
        console.log('here1: ', reloadTime, document.getElementById('reloadTimeMins'));
        var refreshTime = parseInt(reloadTime)*60000;
        if(!refreshInterval && refreshTime >= 60000){
            console.log('here2; ', refreshTime); 
        refreshInterval = setInterval(()=>chrome.tabs.reload(), refreshTime);
        }
        console.log('here3: ', refreshTime);
    }, false);
    console.log('here4');
    stopReloadButton.addEventListener('click', function() {
        if(refreshInterval)
            clearInterval(refreshInterval);
    }, false);
}, false);