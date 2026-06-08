var map = L.map('leafletMap')
.setView([22.9734,78.6569],5);

L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{
maxZoom:19
}
).addTo(map);

var marker=L.marker(
[28.6139,77.2090]
).addTo(map);

marker.bindPopup(
"Sample GIS Project Location"
);
