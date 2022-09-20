//create map
var map = L.map('map').setView([42.842151, -78.800499]);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

//get user location
async function getCoords(){
    pos = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
    })
    return [pos.coords.latitude, pos.coords.longitude]
}

console.log(getCoords());



