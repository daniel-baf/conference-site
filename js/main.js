(function () {
  "use strict";
  // variables
  let dayPassPrice = 30,
    twoDaysPassPrice = 45,
    labelsPackPrice = 2,
    tshirtPrice = 10,
    fullPassPrice = 80,
    tshirtDiscount = 0.07, //means 7,
    totalAmounts,
    products = [];

  document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM loaded"); //DOM loades, can start to innerHTML

    // what the people takes
    let gift = document.getElementById("gift");
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
    // extras
    let labels = document.getElementById("label");
    let tShirts = document.getElementById("event_tshirt");

    //EVENTS
    calc.addEventListener("click", calculateAmounts);

    // FUNCTIONS
    function calculateAmounts(event) {
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
          products.push(labels.value + " Camisas");

        console.log(products);
      }
    }

    // FUNCTIONS
  }); //DOM CONTENT LOADED
})();
