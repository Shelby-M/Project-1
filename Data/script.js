// mapbox token 
mapboxgl.accessToken = 'pk.eyJ1IjoiZGF0c2hlbGJ5ZmF5ZSIsImEiOiJja3RnM3dvMWowZWphMnBvbGxmaG44Z2ZmIn0.yzzlQyZ8mHiQBpckxLUcOQ';
// google apikey
googleApikey = 'AIzaSyCQwhxC1XQdwl0B2Aqpb5S6fQCpXOvC0W8';

//search button + input box
var searchInput = document.querySelector('#searchInput')
var searchButton = document.querySelector('#searchButton')

// button and fetch response
searchButton.addEventListener('click', function(){
fetch('')

    .then( response => response.json())
    .then( data =>console.log(data))
    })

//finds current location, brings pop up box to ask allow or deny location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true})
    
// uses lat+lon to bring up location
    function successLocation(position){
console.log(position)
setupMap([position.coords.longitude, position.coords.latitude])
    }
// sets default location to Charlotte
    function errorLocation(){
setupMap([-80.84, 35.2])
    }
//map setup 
function setupMap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom:9
        })
}


   
  