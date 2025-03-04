// Initialize the map
let map = L.map("map").setView([9.082, 8.6753], 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

let searchTimeout;

// Function to fetch PHC locations from Overpass API
async function fetchPHCLocations(lat, lon) {
  const query = `https://overpass-api.de/api/interpreter?data=[out:json];(node[amenity=clinic](around:50000,${lat},${lon});node[amenity=hospital](around:50000,${lat},${lon});node[healthcare=primary](around:50000,${lat},${lon}););out;`;

  try {
    let response = await fetch(query);
    let data = await response.json();
    displayPHCMarkers(data);
  } catch (error) {
    console.error("Error fetching PHC locations:", error);
  }
}

// Function to display PHC markers on the map
function displayPHCMarkers(data) {
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  data.elements.forEach((phc) => {
    let { lat, lon, tags } = phc;
    let name = tags.name || "Unnamed PHC";
    L.marker([lat, lon])
      .addTo(map)
      .bindPopup(`<b>${name}</b><br>Latitude: ${lat}<br>Longitude: ${lon}`);
  });
}

// Function to get user's location and fetch PHCs nearby
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        map.setView([lat, lon], 12);
        fetchPHCLocations(lat, lon);
      },
      (error) => {
        console.error("Geolocation error:", error);
      }
    );
  } else {
    alert("Geolocation is not supported by your browser");
  }
}

// Function to search for a location (debounced)
async function searchLocation() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(async () => {
    let locationInput = document.getElementById("locationInput").value;
    if (!locationInput.trim()) return;

    let url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      locationInput
    )}`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      if (data.length > 0) {
        let lat = parseFloat(data[0].lat);
        let lon = parseFloat(data[0].lon);
        map.setView([lat, lon], 12);
        fetchPHCLocations(lat, lon);
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }

    console.log(locationInput);
  }, 500); // 500ms debounce time
}

// Call getUserLocation when the page loads
getUserLocation();

// Listen for input changes on search field
document
  .getElementById("locationInput")
  .addEventListener("input", searchLocation);
