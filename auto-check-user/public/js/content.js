$(document).ready(function () {
    /* khởi tạo bộ lưu trữ nếu mở lần đầu*/
    chrome.storage.sync.get(function () {
        user = { "mssv": [] };
        chrome.storage.sync.set({
            "list": user
        });
    });
    /*----------------*/
    chrome.storage.sync.get(["list"], function (result) {
        console.log(result['list']['mssv']);
    });

    var iframe = document.getElementById("iframeServer");
    var y = (iframe.contentWindow || iframe.contentDocument);
    var pre_info = y.document.getElementsByTagName("table")[0].innerHTML;
    var item_info = JSON.parse(pre_info.slice(1, -1));
    console.log("object", pre_info);


    
});