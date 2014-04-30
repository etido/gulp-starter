var $ = require("jquery");

$(document).ready(function() {
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 11,
        center: new google.maps.LatLng(38.923827300000000000,-8.9)
    });
});
