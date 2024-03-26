
// UPDATE THIS WITH A BETTER STARTING LATITUDE AND LONGITUDE AND ZOOM LEVEL
const map = L.map('map').setView([-41.27, 173.3], 5);
L.control.scale().addTo(map);


// REPLACE THIS BLOCK OF CODE WITH YOUR MAPBOX CODE

const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/gdmckenzie/clu1ok424000b01q5bhxl2b0w/draft/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2RtY2tlbnppZSIsImEiOiJjbHNtZjZmdXEwb2h4MmltdGJodXd1MmpyIn0.UrHBVKEcCwL1MBqo8k7bmA', {
	maxZoom: 19,
	tileSize: 512,
    zoomOffset: -1,
	attribution: '&copy; OpenStreetMap | MapBox - Projection: WGS84 Spherical Mercator'
}).addTo(map);
// END REPLACE BLOCK



// There are four markers below.  Each has a latitude and longitude.  Edit these to be your unique places of interest.
// Also note that each has its own 'pop-up.'  Edit the text in each of these to say why each location is important to you.
const marker1 = L.marker([-43.4270447, 170.1515996]).addTo(map)
	.bindPopup('Alex Knob (1303m) - Has been on the bucket list the longest. Apparently offers one of the best views of the Franz Josef Glacier without needing to spend hundreds of dollars on a helicopter ride.');

const marker2 = L.marker([-44.6939939, 169.0489394]).addTo(map)
	.bindPopup('Roys Peak (1572m) - Well-known South Island day walk with a gorgeous panoramic view of Lake Wanaka and of Mt Aspiring. Would love to do before sunrise.');

const marker3 = L.marker([-43.2578071, 171.7701454]).addTo(map)
	.bindPopup('Castle Hill Peak (1998m) - The highest peak in the Torlesse Mountain Range and is known to be very rocky and steep but has the most insane 360 degree views.');

const marker4 = L.marker([-44.46276, 169.20038]).addTo(map)
	.bindPopup('Isthmus Peak (1386m) - The next walk I am planning to do over the Easter Weekend with some friends which overlooks both Lake Wanaka and Lake Hawea.');

const marker5 = L.marker([-43.25295, 171.77979]).addTo(map)
	.bindPopup('The Gap (1389m) - A distinct notch in the Torlesse Mountain Range that you can quickly see when you drive toward the West Coast. I have been begging my father to do it with me for ages but apparently takes 9 to 10 hours to complete.');

const marker6 = L.marker([-39.13007, 175.63560]).addTo(map)
	.bindPopup('Mt Tongariro (1967m) - An iconic New Zealand day walk that is considered to be world-renowned. If I was only able to do one walk in the North Island it would be this one.');

//.openPopup()

// These are the Territorial Authority Polygons that are being accessed from a 3rd party server.
// Edit the style of these polygons (see: https://leafletjs.com/reference.html#path)
var geojsonLayer = new L.GeoJSON.AJAX("https://raw.githubusercontent.com/gdmckenzie123/GISC403/main/TA.geojson", {
		color: 'darkcyan',
		fillOpacity: 0.2,
		weight: 0.5,
	});
geojsonLayer.addTo(map);




// This creates a polygon on your map with provided coordinates.  Edit this polygon to create your own polygon somewhere in New Zealand
// Edit the style of this polygon (see: https://leafletjs.com/reference.html#path)
const polygon = L.polygon([
		[-44.643391, 167.705226],
		[-44.646139, 167.95804],
		[-44.950996, 167.931046],
		[-44.939241, 167.678103]
	],{
		color: 'blue',
		fillColor: '#5DADE2',
	}).addTo(map).bindPopup('Milford Track (53.5km distance) - Arguably the most famous multi-day walk in New Zealand. My family and I are booked to do this next month for the first time and has been 6 years in the making since I started going on walks.');

setTimeout(ReOrder, 1000);
function ReOrder() {
	geojsonLayer.bringToBack();
	polygon.bringToFront();
}




// END OF DOCUMENT