console.log('index script!');

// let geo = (1234, 5678)

// navigator.geolocation.getCurrentPosition(showPos)

//  function showPos(geo) {
  // lon = 52.097834;
  // lat = 4.3976498;
  // console.log(lon,lat)
  // console.log(geo)
  
// }


let London = ('city', 12, 34)

function getGeo() {

  navigator.geolocation.getCurrentPosition(loc)
}

var pos = {};
// var pos = (12, 34);

 function loc(pos) {
  // console.log(pos.coords)
  // console.log(pos.coords.latitude)
  // console.log(pos)
   
    const lat = document.getElementById('lat')
    const lon = document.getElementById('lon')
     lat.textContent = pos.coords.latitude;
     lon.textContent = pos.coords.longitude;
  
}
