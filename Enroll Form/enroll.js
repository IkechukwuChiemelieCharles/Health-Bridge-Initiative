"use strict";

const proceed = document.querySelectorAll(".proceed");

proceed.forEach(function (p) {
  p.addEventListener("click", function (e) {
    e.preventDefault();
    StateApi();
    // lgaApi();
    console.log("state");
  });
});

async function StateApi() {
  try {
    const res = await fetch("https://nga-states-lga.onrender.com/fetch");

    if (!res.ok) {
      console.log("Error Fetching State");

      return;
    }

    // console.log(res);

    const data = await res.json();

    const stateSelect = document.querySelectorAll(".state");
    stateSelect.forEach(function (s) {
      s.innerHTML = '<option value="">Select State</option>';

      data.forEach(function (data, i) {
        const option = document.createElement("option");

        option.textContent = data;
        option.value = data;

        // console.log(i);

        s.appendChild(option);
      });
    });

    console.log(data);
  } catch (err) {
    console.log("Error Fetching State");
  }
}
StateApi();

const state = document.querySelectorAll(".state");

state.forEach(function (s) {
  s.addEventListener("change", function (e) {
    const selectedStateId = e.target.value;

    const townUrl = `https://nga-states-lga.onrender.com/?state=${selectedStateId}`;

    console.log(townUrl);

    async function lgaApi() {
      try {
        const res = await fetch(townUrl);

        if (!res.ok) {
          console.log("Error Fetching lga");
        }

        console.log(res);

        const data = await res.json();

        const lga = document.querySelectorAll(".lga");
        lga.forEach(function (lg) {
          data.forEach(function (data) {
            const lgaoption = document.createElement("option");

            lgaoption.textContent = data;
            lgaoption.value = data.id;

            lg.appendChild(lgaoption);
          });
        });

        console.log(data);
      } catch (err) {
        console.log("Error fetching Lga");
      }
    }
    lgaApi();
  });
});

// https://nga-states-lga.onrender.com/?state=Kaduna
