"use strict"

$(function () {
    if (localStorage['origin'] == "" || localStorage['destination'] == "") {
        //TODO: Tratar do erro
    }
    else {
        $("#origin-answer").text(localStorage['origin']);
        $("#destination-answer").text(localStorage['destination']);
    }
})