/////DYNAMIC//////////////////////////////////////////////////////

//Initialize map
let map = L.map("map").setView([9.082, 8.6753], 6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

let phcData = [];
let cachedLocations = {}; // Cache for coordinates

// Load PHC data from JSON
async function loadPHCData() {
  try {
    let response = await fetch("phc_data.json");
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
function displayPHCMarkersAndList(filteredData, searchedLocation) {
  // Update the typedLocation paragraph with the searched location
  const typedLocationElements =
    document.getElementsByClassName("typedLocation");
  if (typedLocationElements.length > 0) {
    for (let element of typedLocationElements) {
      element.textContent = searchedLocation;
    }
  }

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
          <h5>No PHCs found near ${searchedLocation}</h5>
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
  updatePHCList(nearestPHCs, searchedLocation);
}

// Function to update the PHC list in the UI
// Function to update the PHC list in the UI
function updatePHCList(phcs, searchedLocation) {
  const phcListContainer = document.getElementById("phc-list");
  phcListContainer.innerHTML = ""; // Clear existing content

  // Add a header if you want to show what location these PHCs are near
  // if (searchedLocation) {
  //   const headerElement = document.createElement("div");
  //   headerElement.className = "list-header";
  //   headerElement.innerHTML = `<h4>PHCs near ${searchedLocation}</h4>`;
  //   phcListContainer.appendChild(headerElement);
  // }

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
      <div class="text2">
                    <h5 class="name2">${name}</h5>
                    <span
                      >${rating} <img src="../Assets/star.png" alt="" /> ${reviews}
                      <img src="../Assets/single-dot.png" alt="" /> ${type}
                    </span>
                    <p class="address2">${address}</p>
                    <span
                      ><p class="hours2">${hours}</p>

                      <img src="../Assets/single-dot.png" alt="" />
                      <p class="distance">${distance}</p>
                    </span>
                  </div>
                  <img class="edit" src="../Assets/edit.png" alt="" />
                 <a class="viewMore" href="#" data-phc-id="${
                   phc.id || ""
                 }">View More</a>
    `;

    // Add click event to center map on this PHC when clicked
    phcBox.addEventListener("click", () => {
      if (phc.latitude && phc.longitude) {
        map.setView([phc.latitude, phc.longitude], 15);
      }
    });

    phcListContainer.appendChild(phcBox);
  });

  // Add event listeners for overlay UI
  setupOverlayUIEvents();
}

// New function to set up the overlay UI events
function setupOverlayUIEvents() {
  const viewMoreLinks = document.querySelectorAll(".viewMore");
  const editButtons = document.querySelectorAll(".edit");
  const overMobileCont = document.querySelectorAll(".overMobileCont");
  const overlay = document.querySelectorAll(".overlay");

  // Add click event listeners to viewMore links
  viewMoreLinks.forEach(function (view) {
    view.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("View More clicked");

      // Get the selected PHC data
      const phcId = e.target.getAttribute("data-phc-id");
      const selectedPhc = phcData.find((p) => p.id === phcId);

      if (selectedPhc) {
        console.log("View more details for:", selectedPhc);
      }

      // Show the mobile overlay container
      overMobileCont.forEach(function (container) {
        container.classList.add("open");
        container.classList.remove("closed");
      });

      // Show the overlay
      overlay.forEach(function (overlayElement) {
        overlayElement.classList.remove("hide");
      });
    });
  });

  // Add click event listeners to edit buttons
  editButtons.forEach(function (edit) {
    edit.addEventListener("click", function () {
      console.log("Edit clicked");

      // Show the mobile overlay container
      overMobileCont.forEach(function (container) {
        container.classList.add("open");
        container.classList.remove("closed");
      });

      // Show the overlay
      overlay.forEach(function (overlayElement) {
        overlayElement.classList.remove("hide");
      });
    });
  });

  // Add click event listeners to overlay to close
  overlay.forEach(function (overlayElement, i) {
    overlayElement.addEventListener("click", function () {
      overMobileCont[i].classList.remove("open");
      overMobileCont[i].classList.add("closed");
      overlayElement.classList.add("hide");
    });
  });
}

// Function to search for PHCs
// Function to search for PHCs
async function searchLocation() {
  let locationInput = document.getElementById("locationInput").value;
  if (!locationInput.trim()) return;

  // Update the typedLocation paragraph with the searched location
  const typedLocationElements =
    document.getElementsByClassName("typedLocation");
  if (typedLocationElements.length > 0) {
    for (let element of typedLocationElements) {
      element.textContent = locationInput.trim();
    }
  }

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

      // Make sure to pass the locationInput to displayPHCMarkersAndList
      displayPHCMarkersAndList(filteredPHCs, locationInput.trim());
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

// Add event listener for input changes or you could change to button click if preferred
document
  .getElementById("locationInput")
  .addEventListener("input", searchLocation);

// You may also want to add this function to handle direct PHC selection
function selectPHC(phcId) {
  const selectedPhc = phcData.find((phc) => phc.id === phcId);

  if (selectedPhc && selectedPhc.latitude && selectedPhc.longitude) {
    map.setView([selectedPhc.latitude, selectedPhc.longitude], 15);

    // Highlight the selected PHC in the list
    document.querySelectorAll(".box").forEach((box) => {
      box.classList.remove("selected");
    });

    const selectedBox = document
      .querySelector(`[data-phc-id="${phcId}"]`)
      .closest(".box");
    if (selectedBox) {
      selectedBox.classList.add("selected");
      selectedBox.scrollIntoView({ behavior: "smooth" });
    }
  }
}
