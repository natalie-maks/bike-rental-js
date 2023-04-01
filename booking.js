import Select from "./select.js";

const selectElements = document.querySelectorAll("select");

selectElements.forEach((selectElement) => {
  new Select(selectElement);
});

const rentDuration = document.getElementById("rent-duration");
const numOfRiders = document.getElementById("num-of-riders");
const typeOfBike = document.getElementById("type-of-bike");
const extras = document.querySelectorAll(".extra");

console.log(numOfRiders.value);

let riders = 0;
let personBike;

numOfRiders.addEventListener("change", () => {
  console.log(`helli`);
  riders = numOfRiders.value;
  createTypeOfBikeSection();
});

rentDuration.addEventListener("change", () => {
  createTypeOfBikeSection();
});

function createTypeOfBikeSection() {
  typeOfBike.innerHTML = ``;

  const disabled = rentDuration.value === "half" ? "disabled" : "";

  for (let i = 0; i < riders; i++) {
    let personBike = `<div class="person">
            <p>Person ${i + 1}</p>
            <label for="bike-type-pers${i + 1}">Type</label>
            <select name="bike-type-pers${i + 1}" id="bike-type-pers${i + 1}" class="bike-type">
              <option value="hybrid">Hybrid</option>
              <option value="mtb" ${disabled}>MTB</option>
              <option value="gravel" ${disabled}>Gravel</option>
              <option value="road-bike">Road bike</option>
              <option value="child-bike">Child bike</option>
              <option value="ebike">eBike</option>
              <option value="velocity-tandem">Ridgeback Velocity Tandem</option>
              <option value="tandem-hybrid">Viking Tandem Hybrid</option>
              <option value="trike">Trike</option>
            </select>
            <label for="bike-size-pers${i + 1}">Size</label>
            <select name="bike-size-pers${i + 1}" id="bike-size-pers${i + 1}">
              <option value="xs">xs</option>
              <option value="sm">sm</option>
              <option value="m">m</option>
              <option value="l">l</option>
              <option value="xl">xl</option>
            </select>
            <label for="gender-pers${i + 1}">Gender</label>
            <select name="gender-pers${i + 1}" id="gender-pers${i + 1}">
              <option value="m">M</option>
              <option value="f">F</option>
            </select>
          </div>`;
    typeOfBike.innerHTML += personBike;
  }

  personBike = document.querySelectorAll(".bike-type");
}

function calcPrice() {
  let totalPrice = 0;
  personBike.forEach((person) => {
    console.log(prices[person.value][rentDuration.value]);
    totalPrice += prices[person.value][rentDuration.value];
  });

  extras.forEach((extra) => {
    console.log(extra.value * prices[extra.id][rentDuration.value]);
    totalPrice += extra.value * prices[extra.id][rentDuration.value];
  });

  console.log(totalPrice);
}

const prices = {
  hybrid: {
    half: 11,
    full: 15,
  },
  mtb: {
    full: 25,
  },
  gravel: {
    full: 26,
  },
  "road-bike": {
    half: 18,
    full: 25,
  },
  "child-bike": {
    half: 8,
    full: 13,
  },
  ebike: {
    half: 21,
    full: 32,
  },
  "velocity-tandem": {
    half: 19,
    full: 27,
  },
  "tandem-hybrid": {
    half: 19,
    full: 27,
  },
  trike: {
    half: 13,
    full: 19,
  },
  "tag-a-long": {
    half: 12,
    full: 17,
  },
  "weehoo-single": {
    half: 16,
    full: 23,
  },
  "weehoo-double": {
    half: 16,
    full: 23,
  },
  "child-trailer": {
    half: 15,
    full: 21,
  },
  "child-seat": {
    half: 5,
    full: 5,
  },
};
