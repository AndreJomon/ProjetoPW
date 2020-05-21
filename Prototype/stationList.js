"use strict";

const fetch = require('node-fetch');
const parseStringPromise = require('xml2js').parseStringPromise;


const getStations = () =>     
    fetch("http://www.metro.sp.gov.br/app/trajeto/xt/estacoesTipoXML.asp")
        .then(response => response.text())
        .then(str => parseStringPromise(str))
        .then (result => {
            let set = new Set();

            result.estacoes.estacao.forEach(element => {
                set.add(element.$.nome);
            });

            let json = JSON.stringify(Array.from(set))

            return json;

        });



module.exports = getStations;