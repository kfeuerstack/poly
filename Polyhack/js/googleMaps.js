// function gmapsInit(data) {
    let styledMapType = new google.maps.StyledMapType(
        [
            {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
            {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
            },
            {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
            },
            {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
            },
            {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
            },
            {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
            },
            {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
            }
        ],
        {name: 'Styled Map'});

    geocoder = new google.maps.Geocoder();
    let latlng = new google.maps.LatLng(-34.397, 150.644);
    let mapOptions = {
        zoom: 9,
        scrollwheel: false,
        center: latlng,
        styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
    };
    let mapElement1 = document.getElementById('map1');
    let map1 = new google.maps.Map(mapElement1, mapOptions);
    // codeAddress(map1,data['business-street-address'],data['business-city'],data['business-state']);

    map1.mapTypes.set('styled_map', styledMapType);
    map1.setMapTypeId('styled_map');
    google.maps.event.addListener(map1, 'click', function(event) {
        placeMarker(event.latLng);
    });

    let iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    let icons = {
        parking: {
            icon: iconBase + 'parking_lot_maps.png'
        },
        library: {
            icon: iconBase + 'library_maps.png'
        },
        info: {
            icon: iconBase + 'info-i_maps.png'
        }
    };

    function placeMarker(feature) {
        let marker = new google.maps.Marker({
            // position: location,
            position: feature.position,
            map: map1
        });
    }
let features = [
    {
        position: new google.maps.LatLng(-33.91721, 151.22630),
        type: 'info'
    }, {
        position: new google.maps.LatLng(-33.91539, 151.22820),
        type: 'info'
    }, {
        position: new google.maps.LatLng(-33.91747, 151.22912),
        type: 'info'
    }, {
        position: new google.maps.LatLng(-33.91910, 151.22907),
        type: 'info'
    }, {
        position: new google.maps.LatLng(-33.91725, 151.23011),
        type: 'info'
    }, {
        position: new google.maps.LatLng(-33.91872, 151.23089),
        type: 'info'
    }, {
        position: new google.maps.LatLng(-33.91784, 151.23094),
        type: 'info'
    }, {
        position: new google.maps.LatLng(-33.91682, 151.23149),
        type: 'info'
    }, {
        position: new google.maps.LatLng(-33.91790, 151.23463),
        type: 'info'
    }, {
        position: new google.maps.LatLng(-33.91666, 151.23468),
        type: 'info'
    }, {
        position: new google.maps.LatLng(-33.916988, 151.233640),
        type: 'info'
    }, {
        position: new google.maps.LatLng(-33.91662347903106, 151.22879464019775),
        type: 'parking'
    }, {
        position: new google.maps.LatLng(-33.916365282092855, 151.22937399734496),
        type: 'parking'
    }, {
        position: new google.maps.LatLng(-33.91665018901448, 151.2282474695587),
        type: 'parking'
    }, {
        position: new google.maps.LatLng(-33.919543720969806, 151.23112279762267),
        type: 'parking'
    }, {
        position: new google.maps.LatLng(-33.91608037421864, 151.23288232673644),
        type: 'parking'
    }, {
        position: new google.maps.LatLng(-33.91851096391805, 151.2344058214569),
        type: 'parking'
    }, {
        position: new google.maps.LatLng(-33.91818154739766, 151.2346203981781),
        type: 'parking'
    }, {
        position: new google.maps.LatLng(-33.91727341958453, 151.23348314155578),
        type: 'library'
    }
];

for (let i = 0, feature; feature = features[i]; i++) {
    placeMarker(feature);
}
        map1.setCenter(location);

function codeAddress(map1,address,city,state) {

    //In this case it gets the address from an element on the page, but obviously you  could just pass it to the method instead
    // var address = document.getElementById('business-street-address').innerHTML;
    // var city    = document.getElementById('business-city').innerHTML;
    // var state   = document.getElementById('business-state').innerHTML;
    address = address + " " + city + " " + state;
    console.log(address);

    geocoder.geocode( { 'address' : address }, function( results, status ) {
        if( status == google.maps.GeocoderStatus.OK ) {
            map1.setCenter(results[0].geometry.location);
            console.log("It made it in here and the address is "+ address);
            //In this case it creates a marker, but you can get the lat and lng from the location.LatLng
            map1.setCenter( results[0].geometry.location );
            let marker = new google.maps.Marker( {
                map     : map1,
                position: results[0].geometry.location
            } );
        } else {
            //alert( 'Geocode was not successful for the following reason: ' + status );
        }
    });
}