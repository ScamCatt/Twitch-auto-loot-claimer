var is_selected = false;
var target_url = /^https:\/\/www\.twitch/;
var urls = [];

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if (is_selected == false && target_url.test(current_tab_info.url)) {
            chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => console.log("lmao"));
            is_selected = true;
        };
    });
});

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
    if (is_selected == false && target_url.test(changeInfo.url)) {
        chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => console.log("lmao"));
        is_selected = true;
    };
});

chrome.tabs.onRemoved.addListener(function(tabId, removeInfo){
    if(String(urls[tabId]) == "https://www.twitch.tv/"){
        is_selected = false;
    };
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
        urls[tabId] = changeInfo.url;
    };
});

/*
chrome.webNavigation.onCompleted.addListener((details) => {
    if (["reload", "link", "typed", "generated"].includes(details.transitionType) &&
        details.url === String(target_url)) {
            is_selected = false;
    }
});
*/
