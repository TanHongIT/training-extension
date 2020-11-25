$(document).ready(function () {

    $.ajax({    //create an ajax request to display.php
        type: "GET",
        url: "http://localhost/php-training/for-extension/auto-check-presence.php",
        dataType: "html",   //expect html to be returned                
        success: function (response) {
            $("#responsecontainer").html(response);
            //alert(response);
        }
    });

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

    $("#load").click(function () {
        console.log($('#mssv_user2').val());
    });
});