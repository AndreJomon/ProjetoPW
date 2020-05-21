"use strict";

const fetch = require('node-fetch');

const getStatus = () =>
    fetch('http://apps.cptm.sp.gov.br:8080/AppMobileService/api/LinhasMetropolitanasAppv3?versao=4')
    .then(result => result.json());

module.exports = getStatus;