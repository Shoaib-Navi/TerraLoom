// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
//<%=process.env.MAP_TOKEN %> ---- As this is not accessible in js so we call script in ejs where it's p
// let mapToken = "<%=process.env.MAP_TOKEN %>";
// console.log(mapToken);

mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9, // starting zoom
});


 const marker1 = new mapboxgl.Marker({color:"red"})
  .setLngLat(listing.geometry.coordinates)   //listing.geometry.coordinates
  .setPopup(new mapboxgl.Popup({offset: 25}).setHTML(`<h4>${listing.title}</h4><p>Exact Location will be Provided After Booking</p>`))
  .addTo(map);
