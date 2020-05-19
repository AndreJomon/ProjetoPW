// "use strict";

// const fetch = require('node-fetch');

// let lineStatus = {queijo: "Goiaba"};

// getStatus();

// setInterval(() => {
//     getStatus();
// }, 60000);

// function getStatus () {
//     fetch('http://apps.cptm.sp.gov.br:8080/AppMobileService/api/LinhasMetropolitanasAppv3?versao=4')
//     .then(res => res.json())
//     .then(json => updateLineStatus(json));
// };

// function updateLineStatus(json) {
    
//     lineStatus = json;
//     console.log(lineStatus);
// }


// module.exports = lineStatus;

"use strict";

const fetch = require('node-fetch');

const getStatus = async() => {
    const response = await fetch('http://apps.cptm.sp.gov.br:8080/AppMobileService/api/LinhasMetropolitanasAppv3?versao=4');
    const json = await response.json();

    return json;
}



module.exports = getStatus;