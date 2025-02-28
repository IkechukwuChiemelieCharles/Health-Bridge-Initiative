// // Create Leaflet map
// const map = L.map('map').setView([37.7749, -122.4194], 12);

// // Add tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
//   subdomains: ['a', 'b', 'c']
// }).addTo(map);

// // Function to find nearest hospital
// function findNearestHospital(location) {
//   // Use Nominatim API to find nearest hospital
//   const url = `https://nominatim.openstreetmap.org/search?q=[hospital]&format=json&limit=1&proximity=${location.lat},${location.lng}`;
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       if (data.length > 0) {
//         const hospitalLocation = [data[0].lat, data[0].lon];
//         const marker = L.marker(hospitalLocation).addTo(map);
//         marker.bindPopup(data[0].display_name);
//       }
//     });
// }

// // Event listener for user input
// document.getElementById('user-input').addEventListener('input', (event) => {
//   const userInputValue = event.target.value;
//   // Use Nominatim API to geocode user input
//   const url = `https://nominatim.openstreetmap.org/search?q=${userInputValue}&format=json&limit=1`;
//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       if (data.length > 0) {
//         const location = [data[0].lat, data[0].lon];
//         findNearestHospital(location);
//       }
//     });
// });
