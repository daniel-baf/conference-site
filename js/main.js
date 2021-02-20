(function () {
  "use strict";
  // variables
  let dayPassPrice = 30,
    twoDaysPassPrice = 45,
    labelsPackPrice = 2,
    tshirtPrice = 10,
    fullPassPrice = 80,
    tshirtDiscount = 0.07, //means 7,
    totalAmounts;

  document.addEventListener("DOMContentLoaded", function () { //DOM LOADES

    // map https://leafletjs.com/
    var map = L.map("map").setView([14.968024, -91.773782], 16  );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([14.968024, -91.773782])
      .addTo(map)
      .bindPopup("GDLWebCamps <br> Boletos disponibles")
      .openPopup()
      .bindTooltip("Hola :D")
      .openTooltip();

    // what the people takes
    let gift = document.getElementById("gift"); 
    // user info
    let name = document.getElementById("name"), // BUG show nothing when i get this id
      second_name = document.getElementById("second_name"),
      email = document.getElementById("email");
    //campos pases
    let dayPass = document.getElementById("dayPass"), //work
      twoDaysPass = document.getElementById("twoDaysPass"),
      fullPass = document.getElementById("fullPass");
    //buttons
    let divError = document.getElementById("error"),
      registBtn = document.getElementById("registBtn"),
      calc = document.getElementById("calc_amount");
    // extras
    let labels = document.getElementById("label"),
      tShirts = document.getElementById("event_tshirt");
    // summary
    let result = document.getElementById("products_list"),
      ammount = document.getElementById("total_ammout");

    //EVENTS
    calc.addEventListener("click", calculateAmounts);
    dayPass.addEventListener("blur", showDaysDiv); // use blur when i have a select option
    fullPass.addEventListener("blur", showDaysDiv);
    twoDaysPass.addEventListener("blur", showDaysDiv);
    // validate camps
    name.addEventListener("blur", validateCamps);
    second_name.addEventListener("blur", validateCamps);
    email.addEventListener("blur", validateCamps);
    email.addEventListener("blur", validateEmail);

    // FUNCTIONS
    function calculateAmounts(event) {
      let products = [];
      event.preventDefault(); //TODO deleate this line and program the JSP
      if (gift.value === "") {
        //gift necessary
        alert("Debes elegir un regalo");
        gift.focus();
      } else {
        totalAmounts = //calc the price
          parseInt(dayPass.value, 10 || 0) * dayPassPrice +
          parseInt(twoDaysPass.value, 10 || 0) * twoDaysPassPrice +
          parseInt(fullPass.value, 10 || 0) * fullPassPrice +
          parseInt(labels.value, 10 || 0) * labelsPackPrice +
          parseInt(tShirts.value, 10 || 0) * tshirtPrice * (1 - tshirtDiscount);
        //we need to show only the selelcted options
        if (parseInt(dayPass.value, 10 || 0) > 0)
          products.push(dayPass.value + " Pases por dia");
        if (parseInt(twoDaysPass.value, 10 || 0) > 0)
          products.push(twoDaysPass.value + " Pases por 2 dias");
        if (parseInt(fullPass.value, 10 || 0) > 0)
          products.push(fullPass.value + " Pases completo");
        if (parseInt(tShirts.value, 10 || 0) > 0)
          products.push(tShirts.value + " Camisas");
        if (parseInt(labels.value, 10 || 0) > 0)
          products.push(labels.value + " Etiquetas");

        result.style.display = "block";
        result.innerHTML = "";
        for (let i = 0; i < products.length; i++) {
          result.innerHTML += products[i] + "<br/>";
        }

        ammount.innerHTML = "Q " + totalAmounts.toFixed(2);
        console.log(totalAmounts);
      }
    }

    function showDaysDiv() {
      let selectedDays = [];
      if (parseInt(dayPass.value, 10 || 0) > 0) {
        selectedDays.push("viernes");
      }
      if (parseInt(twoDaysPass.value, 10 || 0) > 0) {
        selectedDays.push("viernes", "sabado");
      }
      if (parseInt(fullPass.value, 10 || 0) > 0) {
        selectedDays.push("viernes", "sabado", "domingo");
      }
      for (let i = 0; i < selectedDays.length; i++) {
        document.getElementById(selectedDays[i]).style.display = "block";
      }
    }

    function validateCamps() {
      if (this.value == "") {
        divError.innerHTML = "Este campo es obligatorio"; //show the text
        divError.style.display = "block"; //show the div
        this.focus();
        this.style.border = "1px solid red"; //change border color
      } else {
        divError.style.display = "none";
        this.style.border = "1px solid #cccccc";
        this.style.padding = "0.5rem";
      }
    }

    function validateEmail() {
      if (this.value.indexOf("@") > -1) {
        this.style.border = "1px solid #cccccc";
      } else {
        this.style.border = "1px solid red";
        divError.style.display = "block";
        divError.style.border = "1px solid red";
        divError.innerHTML = "Debe contener almenos un @";
      }
    }
  }); //DOM CONTENT LOADED
})();
