$.getJSON('http://localhost:3000/secrets.json', (data) => {
    let googleMapsInstatiate

    if (!googleMapsInstatiate) {

        console.log("entrou");

        mapsKey = data.mapsKey;
    
        // Create the script tag, set the appropriate attributes
        var script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${mapsKey}&callback=initMap`;
        script.defer = true;
        script.async = true;

        googleMapsInstatiate = true;
        // Append the 'script' element to 'head'
        document.head.appendChild(script);
    }

    // Attach your callback function to the `window` object
    window.initMap = function() {
        let directionsRenderer = new google.maps.DirectionsRenderer();
        let directionsService = new google.maps.DirectionsService();
        let mapOptions = {
            center: {lat: -23.618003, lng: -46.658519},
            zoom: 10
        }

        let map = new google.maps.Map(document.getElementById('map'), mapOptions);
        directionsRenderer.setMap(map);
        this.calcRoute(directionsRenderer, directionsService);
    };

    
    
});
/// Input the route on map
function calcRoute(directionsRenderer, directionsService) {
    let origin = `Metrô ${localStorage['origin']}`;
    let destination = `Metrô ${localStorage['destination']}`;

    
    if (origin == null || destination == null) {
        console.log("ERRO: Faltou ponto de origem ou destino na busca");
        return;
    } else {
        
        console.log(`A origem é ${origin} e o destino é ${destination}`);
        let request = {
            origin: origin,
            destination: destination,
            travelMode: 'TRANSIT',
            transitOptions: {
                modes: ['SUBWAY', 'TRAIN'],
                routingPreference: 'FEWER_TRANSFERS'
            },
            region: 'BR'
        };

        directionsService.route(request, function(result, status){
            if (status == 'OK') {
                directionsRenderer.setDirections(result);
                writeRoute(result);
            }
        });
    }
}

///Input route route with a Ordered List
function writeRoute(data) {

    let steps = data.routes[0].legs[0].steps;

    let list = $('<ol/>').appendTo('#routeList');

    steps.forEach(step => {
        list.append(`<li>${step.instructions}</li>`); 
    });
}