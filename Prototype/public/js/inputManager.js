"use strict";

localStorage['origin'];
localStorage['destination'];

$(function () {   
    $("#search-button").on("click",  function (event) {
        localStorage['origin'] = $("#origin").val();
        localStorage['destination'] = $("#destination").val();

        if (localStorage['origin'] == "") {
            //TODO: Redirect to error or create a warning
            event.preventDefault();
            $("#origin").addClass("blank-spot");
            $("#warning").html("Preencha os campos que estão sinalizados em vermelho.");
        }
        if (localStorage['destination'] == "") {
            event.preventDefault();
            $("#destination").addClass("blank-spot");
            $("#warning").html("Preencha os campos que estão sinalizados em vermelho.");
        }
    });

    $("#origin").on("click", (event) => {
        console.log("entrou");
        $("#origin").removeClass("blank-spot");
    });

    $("#destination").on("click", (event) => {
        console.log("entrou");
        $("#destination").removeClass("blank-spot");
    });
});