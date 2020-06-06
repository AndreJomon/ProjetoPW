"use strict"

$(function () {
    if (localStorage['origin'] == "" || localStorage['destination'] == "") {
    }
    else {
        $("#origin-answer").text(localStorage['origin']);
        $("#destination-answer").text(localStorage['destination']);
    }
})