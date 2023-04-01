import Select from "./select.js";

const selectElements = document.querySelectorAll("select");

selectElements.forEach((selectElement) => {
  new Select(selectElement);
});

const rentDuration = document.getElementById("rent-duration");
const numOfRiders = document.getElementById("num-of-riders");
const typeOfBike = document.getElementById("type-of-bike");
const extras = document.querySelectorAll(".extra");

let riders = 0;
let personBike;

numOfRiders.addEventListener("click", () => {
  console.log(`helli`);
  riders = numOfRiders.dataset.value;
  createTypeOfBikeSection();
});

rentDuration.addEventListener("change", () => {
  createTypeOfBikeSection();
});

function createTypeOfBikeSection() {
  typeOfBike.innerHTML = ``;

  for (let i = 0; i < riders; i++) {
    let personBike = `<div class="person mb-4">
              <p class="font-display text-2xl mb-2">Person ${i + 1}</p>
              <div
                class="flex flex-col md:flex-row space-y-2 md:space-y-0 lg:flex-row justify-between"
              >
                <div class="flex flex-col xl:flex-row xl:items-center w-full md:w-fit">
                  <label for="bike-type-pers${i + 1}" class="font-display text-xl mr-8">Type</label>
                  <select data-id="bike-type-pers${i + 1}" class="bike-type w-full md:w-[290px]">
                    <option value="hybrid">Hybrid</option>
                    <option value="mtb" >MTB</option>
                    <option value="gravel">Gravel</option>
                    <option value="road-bike">Road bike</option>
                    <option value="child-bike">Child bike</option>
                    <option value="ebike">eBike</option>
                    <option value="velocity-tandem">Velocity Tandem</option>
                    <option value="tandem-hybrid">Tandem Hybrid</option>
                    <option value="trike">Trike</option>
                  </select>
                </div>
                <div
                  class="flex md:flex-col xl:flex-row justify-between w-full md:w-fit items-center md:items-start xl:items-center"
                >
                  <label for="bike-size-pers${i + 1}" class="font-display text-xl mr-8">Size</label>
                  <select data-id="bike-size-pers${i + 1}">
                    <option value="xs">xs</option>
                    <option value="sm">sm</option>
                    <option value="m">m</option>
                    <option value="l">l</option>
                    <option value="xl">xl</option>
                  </select>
                </div>
                <div
                  class="flex md:flex-col xl:flex-row justify-between w- md:w-fit items-center md:items-start xl:items-center"
                >
                  <label for="gender-pers${i + 1}" class="font-display text-xl mr-8">Gender</label>
                  <select data-id="gender-pers${i + 1}">
                    <option value="m">M</option>
                    <option value="f">F</option>
                  </select>
                </div>
              </div>
            </div>`;
    typeOfBike.innerHTML += personBike;
  }
  typeOfBike.querySelectorAll("select").forEach((select) => {
    new Select(select);
  });
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
