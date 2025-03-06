// // Initialize map
// let map = L.map("map").setView([9.082, 8.6753], 6);
// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution: "&copy; OpenStreetMap contributors",
// }).addTo(map);

// let phcData = [];
// let cachedLocations = {}; // Cache for coordinates

// // Load PHC data from JSON
// async function loadPHCData() {
//   try {
//     let response = await fetch("phc_data.json"); // Update with actual JSON file path
//     phcData = await response.json();

//     // Check local storage for cached locations
//     let storedCache = localStorage.getItem("cachedPHCLocations");
//     if (storedCache) {
//       cachedLocations = JSON.parse(storedCache);
//     }

//     // Process PHC data and get coordinates if missing
//     await addCoordinatesToPHCData();

//     console.log("PHC Data with Coordinates:", phcData);
//   } catch (error) {
//     console.error("Error loading PHC data:", error);
//   }
// }

// // Function to get coordinates from Nominatim API
// async function getCoordinates(lga, state) {
//   let query = `${lga}, ${state}, Nigeria`;

//   // Check cache first
//   if (cachedLocations[query]) {
//     return cachedLocations[query];
//   }

//   let url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
//     query
//   )}`;

//   try {
//     let response = await fetch(url);
//     let data = await response.json();

//     if (data.length > 0) {
//       let coordinates = {
//         latitude: parseFloat(data[0].lat),
//         longitude: parseFloat(data[0].lon),
//       };

//       // Save to cache
//       cachedLocations[query] = coordinates;
//       localStorage.setItem(
//         "cachedPHCLocations",
//         JSON.stringify(cachedLocations)
//       );

//       return coordinates;
//     }
//   } catch (error) {
//     console.error("Error fetching coordinates:", error);
//   }

//   return null;
// }

// // Function to add missing coordinates
// async function addCoordinatesToPHCData() {
//   for (let phc of phcData) {
//     if (!phc.latitude || !phc.longitude) {
//       let coords = await getCoordinates(phc.lga_name, phc.state_name);
//       if (coords) {
//         phc.latitude = coords.latitude;
//         phc.longitude = coords.longitude;
//       }
//     }
//   }
// }

// // Function to display PHC markers
// function displayPHCMarkers(filteredData) {
//   map.eachLayer((layer) => {
//     if (layer instanceof L.Marker) {
//       map.removeLayer(layer);
//     }
//   });

//   if (filteredData.length === 0) {
//     console.log("No PHCs found near this location.");
//     return;
//   }

//   console.log("Nearest PHCs:", filteredData);

//   filteredData.forEach((phc) => {
//     let { latitude, longitude, name } = phc;

//     if (!latitude || !longitude) return;

//     L.marker([latitude, longitude])
//       .addTo(map)
//       .bindPopup(`<b>${name || "Unnamed PHC"}</b>`)
//       .openPopup();
//   });
// }

// // Function to search for PHCs
// async function searchLocation() {
//   let locationInput = document.getElementById("locationInput").value;
//   if (!locationInput.trim()) return;

//   let url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
//     locationInput
//   )}`;
//   try {
//     let response = await fetch(url);
//     let data = await response.json();

//     if (data.length > 0) {
//       let lat = parseFloat(data[0].lat);
//       let lon = parseFloat(data[0].lon);
//       map.setView([lat, lon], 12);

//       let filteredPHCs = phcData
//         .filter((phc) => phc.latitude && phc.longitude)
//         .map((phc) => ({
//           ...phc,
//           distance: getDistanceFromLatLonInKm(
//             lat,
//             lon,
//             phc.latitude,
//             phc.longitude
//           ),
//         }))
//         .filter((phc) => phc.distance <= 50)
//         .sort((a, b) => a.distance - b.distance);

//       displayPHCMarkers(filteredPHCs);
//     }
//   } catch (error) {
//     console.error("Error fetching location:", error);
//   }
// }

// // Function to calculate distance
// function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
//   const R = 6371;
//   const dLat = (lat2 - lat1) * (Math.PI / 180);
//   const dLon = (lon2 - lon1) * (Math.PI / 180);
//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(lat1 * (Math.PI / 180)) *
//       Math.cos(lat2 * (Math.PI / 180)) *
//       Math.sin(dLon / 2) *
//       Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c;
// }

// // Load data on page load
// loadPHCData();
// document
//   .getElementById("locationInput")
//   .addEventListener("input", searchLocation);

//////////CLAUDE//////////////////////////////

// Initialize map
let map = L.map("map").setView([9.082, 8.6753], 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

let phcData = [];
let cachedLocations = {}; // Cache for coordinates

// Load PHC data from JSON
async function loadPHCData() {
  try {
    let response = await fetch("phc_data.json"); // Update with actual JSON file path
    phcData = await response.json();

    // Check local storage for cached locations
    let storedCache = localStorage.getItem("cachedPHCLocations");
    if (storedCache) {
      cachedLocations = JSON.parse(storedCache);
    }

    // Process PHC data and get coordinates if missing
    await addCoordinatesToPHCData();

    console.log("PHC Data with Coordinates:", phcData);
  } catch (error) {
    console.error("Error loading PHC data:", error);
  }
}

// Function to get coordinates from Nominatim API
async function getCoordinates(lga, state) {
  let query = `${lga}, ${state}, Nigeria`;

  // Check cache first
  if (cachedLocations[query]) {
    return cachedLocations[query];
  }

  let url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    query
  )}`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    if (data.length > 0) {
      let coordinates = {
        latitude: parseFloat(data[0].lat),
        longitude: parseFloat(data[0].lon),
      };

      // Save to cache
      cachedLocations[query] = coordinates;
      localStorage.setItem(
        "cachedPHCLocations",
        JSON.stringify(cachedLocations)
      );

      return coordinates;
    }
  } catch (error) {
    console.error("Error fetching coordinates:", error);
  }

  return null;
}

// Function to add missing coordinates
async function addCoordinatesToPHCData() {
  for (let phc of phcData) {
    if (!phc.latitude || !phc.longitude) {
      let coords = await getCoordinates(phc.lga_name, phc.state_name);
      if (coords) {
        phc.latitude = coords.latitude;
        phc.longitude = coords.longitude;
      }
    }
  }
}

// Function to display PHC markers and update the UI list
function displayPHCMarkersAndList(filteredData) {
  // Clear existing markers
  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  if (filteredData.length === 0) {
    console.log("No PHCs found near this location.");
    // Clear the PHC list in UI
    document.getElementById("phc-list").innerHTML = `
      <div class="box">
        <div class="text">
          <h5>No PHCs found near this location</h5>
          <p>Try searching for a different location</p>
        </div>
      </div>
    `;
    return;
  }

  // Limit to 5 nearest PHCs
  const nearestPHCs = filteredData.slice(0, 6);
  
  console.log("6 Nearest PHCs:", nearestPHCs);

  // Update map markers
  nearestPHCs.forEach((phc) => {
    let { latitude, longitude, name } = phc;

    if (!latitude || !longitude) return;

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup(`<b>${name || "Unnamed PHC"}</b>`)
      .openPopup();
  });

  // Update PHC list in UI
  updatePHCList(nearestPHCs);
}

// Function to update the PHC list in the UI
function updatePHCList(phcs) {
  const phcListContainer = document.getElementById("phc-list");
  phcListContainer.innerHTML = ""; // Clear existing content

  phcs.forEach((phc) => {
    // Default values for missing data
    const name = phc.name || "Unnamed PHC";
    const rating = phc.rating || "N/A";
    const reviews = phc.reviews || "0";
    const type = phc.type || "Community HCC";
    const address = phc.address || `${phc.lga_name}, ${phc.state_name}`;
    const hours = phc.hours || "Open 24 Hours";
    const phone = phc.phone || "N/A";
    const distance = phc.distance ? `${phc.distance.toFixed(1)} km away` : "";

    const phcBox = document.createElement("div");
    phcBox.className = "box";
    phcBox.innerHTML = `
      <div class="text">
        <h5>${name}</h5>
        <span>
          ${rating} <img src="../Assets/star.png" alt="" /> (${reviews})
          <img src="../Assets/single-dot.png" alt="" /> ${type}
        </span>
        <p>${address}</p>
        <span>
          <p>${hours}</p>
          <img src="../Assets/single-dot.png" alt="" /> ${phone}
        </span>
        <p class="distance">${distance}</p>
      </div>
      <img class="edit" src="../Assets/edit.png" alt="" />
      <a class="viewMore" href="#" data-phc-id="${phc.id || ''}">View More</a>
    `;

    // Add click event to center map on this PHC when clicked
    phcBox.addEventListener("click", () => {
      if (phc.latitude && phc.longitude) {
        map.setView([phc.latitude, phc.longitude], 15);
      }
    });

    phcListContainer.appendChild(phcBox);
  });

  // Add event listeners for "View More" links
  document.querySelectorAll('.viewMore').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const phcId = e.target.getAttribute('data-phc-id');
      const selectedPhc = phcs.find(p => p.id === phcId);
      
      if (selectedPhc) {
        // You can implement a modal or redirect to a detail page here
        console.log("View more details for:", selectedPhc);
      }
    });
  });
}

// Function to search for PHCs
async function searchLocation() {
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

      let filteredPHCs = phcData
        .filter((phc) => phc.latitude && phc.longitude)
        .map((phc) => ({
          ...phc,
          distance: getDistanceFromLatLonInKm(
            lat,
            lon,
            phc.latitude,
            phc.longitude
          ),
        }))
        .filter((phc) => phc.distance <= 50)
        .sort((a, b) => a.distance - b.distance);

      displayPHCMarkersAndList(filteredPHCs);
    }
  } catch (error) {
    console.error("Error fetching location:", error);
  }
}

// Function to calculate distance
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Load data on page load
loadPHCData();
document
  .getElementById("locationInput")
  .addEventListener("input", searchLocation);

// You may also want to add this function to handle direct PHC selection
function selectPHC(phcId) {
  const selectedPhc = phcData.find(phc => phc.id === phcId);
  
  if (selectedPhc && selectedPhc.latitude && selectedPhc.longitude) {
    map.setView([selectedPhc.latitude, selectedPhc.longitude], 15);
    
    // Highlight the selected PHC in the list
    document.querySelectorAll('.box').forEach(box => {
      box.classList.remove('selected');
    });
    
    const selectedBox = document.querySelector(`[data-phc-id="${phcId}"]`).closest('.box');
    if (selectedBox) {
      selectedBox.classList.add('selected');
      selectedBox.scrollIntoView({ behavior: 'smooth' });
    }
  }
}