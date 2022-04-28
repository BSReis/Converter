document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();

  //show value
  let currentValue = document.querySelectorAll(".currentValue");
  function updateValue() {
    for (let i = 0; i < currentValue.length; i++) {
      currentValue[i].innerHTML = getvalue();
    }
  }
  //get the value from the input
  let mainInput = document.getElementById("mainInput");
  function getvalue() {
    let mainInputV = document.getElementById("mainInput").value;
    return mainInputV;
  }

  const feet = 3.28084;
  const gallons = 0.264172;
  const pounds = 0.45359237;

  //1º converter

  let metersToFeet = document.getElementById("metersToFeet");
  function meterstofeet() {
    let result = getvalue() * feet;
    metersToFeet.innerHTML = ` meters = ${(
      Math.round(result * 100) / 100
    ).toFixed(2)} feet`;
  }

  let feetToMeters = document.getElementById("feetToMeters");
  function feettometers() {
    let result = getvalue() / feet;
    feetToMeters.innerHTML = ` feet = ${(
      Math.round(result * 100) / 100
    ).toFixed(2)} meters`;
  }
  //2º converter

  let litersToGallons = document.getElementById("litersToGallons");
  function literstogallons() {
    let result = getvalue() * gallons;
    litersToGallons.innerHTML = ` liters = ${(
      Math.round(result * 100) / 100
    ).toFixed(2)} gallons`;
  }
  let gallonsToLiter = document.getElementById("gallonsToLiters");
  function gallonstoliters() {
    let result = getvalue() / gallons;
    gallonsToLiter.innerHTML = ` gallons = ${(
      Math.round(result * 100) / 100
    ).toFixed(2)} liters`;
  }
  //3º converter
  let kilosToPounds = document.getElementById("kilosToPounds");
  function kilostopounds() {
    let result = getvalue() / pounds;
    kilosToPounds.innerHTML = ` kilos = ${(
      Math.round(result * 100) / 100
    ).toFixed(2)} pounds`;
  }
  let poundsToKilos = document.getElementById("poundsToKilos");
  function poundstokilos() {
    let result = getvalue() * pounds;
    poundsToKilos.innerHTML = ` pounds = ${(
      Math.round(result * 100) / 100
    ).toFixed(2)} kilos`;
  }

  //event listener
  mainInput.addEventListener("keyup", () => {
    meterstofeet(),
      feettometers(),
      literstogallons(),
      kilostopounds(),
      poundstokilos(),
      gallonstoliters();
    updateValue();
  });
});
