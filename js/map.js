$(function () {
    'use strict';


    /*
            Google Maps
        */

    if ($('#map').length) {
        initMap();
    }


});



/*
	Google Map Options
*/

function initMap() {
    var myLatlng = new google.maps.LatLng(40.773328,-73.960088); // <- Your latitude and longitude
    var styles = [
        {
            "featureType": "water",
            "stylers": [{
                "color": "#d8dee9"
            },
                {
                    "visibility": "on"
                }]
        },
        {
            "featureType": "landscape",
            "stylers": [{
                "color": "#eeeeee"
            }]
        }];

    var mapOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeControl: false,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: styles
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'We are here!'
    });
}