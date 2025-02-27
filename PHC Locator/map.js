// Get user input location
const userInput = document.getElementById("user-input");

// Create Google Maps API objects
const geocoder = new google.maps.Geocoder();
const map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 37.7749, lng: -122.4194 },
  zoom: 12,
});

// Function to find nearest hospital
function findNearestHospital(location) {
  const request = {
    location: location,
    radius: "5000", // 5 km radius
    type: "hospital",
  };

  const service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      const nearestHospital = results[0];
      const marker = new google.maps.Marker({
        position: nearestHospital.geometry.location,
        map: map,
      });

      // Display hospital information
      console.log(nearestHospital.name, nearestHospital.formattedAddress);
    }
  });
}

// Event listener for user input
userInput.addEventListener("input", (event) => {
  const userInputValue = event.target.value;
  geocoder.geocode({ address: userInputValue }, (results, status) => {
    if (status === "OK") {
      const location = results[0].geometry.location;
      findNearestHospital(location);
    }
  });
});
