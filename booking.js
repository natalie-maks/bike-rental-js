import Select from "./select.js";

const selectElements = document.querySelectorAll("select");

selectElements.forEach((selectElement) => {
  new Select(selectElement);
});

const rentDuration = document.getElementById("rent-duration");
const numOfRiders = document.getElementById("num-of-riders");
const typeOfBike = document.getElementById("type-of-bike");
const disabled = document.querySelectorAll(`[data-disabled]`);
const extras = document.querySelectorAll("div.extra");
const total = document.getElementById("total");

let rentDurationValue = rentDuration.dataset.value;
let riders = 0;
let personBike;

numOfRiders.addEventListener("click", () => {
  if (Number(numOfRiders.dataset.value) !== riders) {
    riders = Number(numOfRiders.dataset.value);
    createTypeOfBikeSection();
    disabled.forEach((disabled) => {
      disabled.classList.remove("disabled");
    });

    calcPrice();
  }
});

rentDuration.addEventListener("click", () => {
  if (rentDuration.dataset.value !== rentDurationValue) {
    rentDurationValue = rentDuration.dataset.value;
    calcPrice();
  }
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
  personBike = document.querySelectorAll("div.bike-type");
  personBike.forEach((person) => {
    let bikeTypeValue = "hybrid";
    person.addEventListener("click", () => {
      if (bikeTypeValue !== person.dataset.value) {
        bikeTypeValue = person.dataset.value;
        calcPrice();
      }
    });
  });
}

extras.forEach((extra) => {
  let extraValue = 0;
  extra.addEventListener("click", () => {
    if (extraValue !== Number(extra.dataset.value)) {
      extraValue = Number(extra.dataset.value);
      calcPrice();
    }
  });
});

function calcPrice() {
  let totalPrice = 0;
  personBike.forEach((person) => {
    totalPrice += prices[person.dataset.value][rentDuration.dataset.value];
  });

  extras.forEach((extra) => {
    totalPrice += extra.dataset.value * prices[extra.id][rentDuration.dataset.value];
  });

  total.innerText = totalPrice;
}

const prices = {
  hybrid: {
    half: 11,
    full: 15,
  },
  mtb: {
    half: 19,
    full: 25,
  },
  gravel: {
    half: 19,
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

const cardNumber = document.getElementById("card-number");
const expirationDate = document.getElementById("expire-date");
const cvv = document.getElementById("cvv");
const phone = document.getElementById("phone");

var cardnumber_mask = new IMask(cardNumber, {
  mask: "0000{ }0000{ }0000{ }0000",
});

var phone_mask = new IMask(phone, {
  mask: "{+}Number",
  blocks: {
    Number: {
      mask: Number,
    },
  },
});

var securitycode_mask = new IMask(cvv, {
  mask: "000",
});

var expirationdate_mask = new IMask(expirationDate, {
  mask: "MM{ / }YY",
  blocks: {
    YY: {
      mask: "00",
    },

    MM: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
    },
  },
});

const form = document.querySelector("form");
const successWindow = document.getElementById("success-window");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  successWindow.classList.remove("hidden");
  window.addEventListener("click", () => {
    successWindow.classList.add("hidden");
  });
  form.reset();
});
