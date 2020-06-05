"use strict"

$(function() {
    UpdateLineStatus();
    UpdateStationList();
});

function UpdateLineStatus() {

    let lines = ["azul", "verde", "vermelha", "amarela", "lilas", "rubi", "diamante", "esmeralda", "turquesa", "coral", "safira", "jade", "prata"];

    $.getJSON('http://localhost:3000/lines.json', (json) => {

        for (let i = 0; i < lines.length; i++) {
            putInTable(lines[i], json[i].Status);
        }
    });
}

function putInTable (lineName, statusText) {
    lineName = `#${lineName}`;

    $(lineName).text(statusText);
    
    if (statusText == "Operação Normal") {
        $(lineName).parent().addClass("normal-operation");
    } else if (statusText == "Operação Parcial") {
        $(lineName).parent().addClass("parcial-operation");
    } else {
        $(lineName).parent().addClass("no-operation");
    }
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