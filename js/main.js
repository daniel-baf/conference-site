(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    // TODO put code here
    let gift = document.getElementById("gift");

    console.log("DOM loaded");

    // user info
    let name = document.getElementById("name"); // BUG show nothing when i get this id
    let second_name = document.getElementById("second_name");
    let email = document.getElementById("email");

    //campos pases
    let dayPass = document.getElementById("dayPass"); //work
    let twoDaysPass = document.getElementById("twoDaysPass");
    let fullPass = document.getElementById("fullPass");

    //buttons
    let divError = document.getElementById("error");
    let registBtn = document.getElementById("registBtn");
    let result = document.getElementById("products_list");
    let calc = document.getElementById("calc_amount");

    calc.addEventListener("click", calculateAmounts);

    // FUNCTIONS
    function calculateAmounts(event) {
      event.preventDefault();
      if (gift.value === "") {
        alert("Debes elegir un regalo");
        gift.focus();
      } else {
        console.log("Regalo elegido");
      }
    }

    // FUNCTIONS
  }); //DOM CONTENT LOADED
})();
