"use strict"

$(function() {
    UpdateLineStatus();
    UpdateStationList();
});

function UpdateLineStatus() {

    $.getJSON('http://localhost:3000/lines.json', (json) => {
        $("#azul").text(json[0].Status);
        $("#verde").text(json[1].Status);
        $("#vermelha").text(json[2].Status);
        $("#amarela").text(json[3].Status);
        $("#lilas").text(json[4].Status);
        $("#rubi").text(json[5].Status);
        $("#diamante").text(json[6].Status);
        $("#esmeralda").text(json[7].Status);
        $("#turquesa").text(json[8].Status);
        $("#coral").text(json[9].Status);
        $("#safira").text(json[10].Status);
        $("#jade").text(json[11].Status);
        $("#prata").text(json[12].Status);
    });
}

function UpdateStationList() {
    $.getJSON("http://localhost:3000/stations.json", (json) => {
        json = JSON.parse(json);
        json.forEach(element => {
            putInDOM("#stationsCurrent", element);
            putInDOM("#stationsNext", element);
        });
    });
}


function putInDOM(string, estacao) {
    var option = new Option(estacao);
    $(string).append(option);
}