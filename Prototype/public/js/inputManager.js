"use strict";

localStorage['origin'];
localStorage['destination'];

$(function () {   
    $("#search-button").on("click",  function () {
        localStorage['origin'] = $("#origin").val();
        localStorage['destination'] = $("#destination").val();

        if (localStorage['origin'] == "" || localStorage['destination'] == "") {
            //TODO: Redirect to error or create a warning
        }
    });
});