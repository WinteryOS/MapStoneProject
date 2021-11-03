
var map = L.map('mapid').setView([0, 0], 1);


L.tileLayer('../TarkovReserveMap/{z}/{x}/{y}.jpg',
    {
        continuousWorld: false,
        noWrap: true,
        maxZoom: 2,
        minZoom: 2,

    }).addTo(map);

var questIcon = L.icon({
    iconUrl: '../images/osrsQuest.png',
    iconSize: [38, 95], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var theMarker = {};
var marker = L.marker([0, 0], { icon: questIcon }).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();


var corner1 = L.latLng(71.75, -179.34),
    corner2 = L.latLng(-72.01, 137.02),
    bounds = L.latLngBounds(corner1, corner2);


map.fitBounds([
    [71.75, -179.34],
    [-72.01, 137.02]
]);

map.on('click', function (e) {
    lat = e.latlng.lat;
    lon = e.latlng.lng;
    console.log("You clicked the map at LAT: " + lat + " and LONG: " + lon);
    var marker2 = new L.marker(e.latlng).addTo(map);
});




