"use strict"

$(function() {
    UpdateLineStatus();
    UpdateStationList();
});

function UpdateLineStatus() {

    fetch("https://cors-anywhere.herokuapp.com/http://apps.cptm.sp.gov.br:8080/AppMobileService/api/LinhasMetropolitanasAppv3?versao=4").then(function (response) {
        return response.json();
    }).then(function (json) {
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
        console.log(json);
    });
}

function UpdateStationList() {
    fetch("https://cors-anywhere.herokuapp.com/http://www.metro.sp.gov.br/app/trajeto/xt/estacoesTipoXML.asp")
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => xmlToJson(data))
        .then(data => {
            data.estacoes.estacao.forEach(element => {
                putInDOM("#stationsCurrent", element);
                putInDOM("#stationsNext", element)
            });
        });
}

function putInDOM(string, estacao) {
    var option = new Option(estacao["@attributes"].nome, estacao["@attributes"].nome);
    console.log(option);
    $(string).append(option);
}

//Funções retiradas de: https://davidwalsh.name/convert-xml-json
// Changes XML to JSON
function xmlToJson(xml) {
	
	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};