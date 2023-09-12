document.addEventListener("DOMContentLoaded", () => {
  ////////////////// Acardion Menu
  let btn = document.querySelector(".fa-play");
  let openmenu = document.querySelector(".open-menu");
  btn.addEventListener("click", () => {
    btn.classList.toggle("rotate");
    if (openmenu.style.maxHeight) {
      openmenu.style.maxHeight = null;
      openmenu.style.border = "0px";
    } else {
      openmenu.style.maxHeight = openmenu.scrollHeight + "px";
      openmenu.style.border = "1px solid #535353";
    }
  });
  ////////////////// Acardion Menu
  
  /////////////////////////// clock
  setInterval(timer, 1000);
  function timer() {
    let time = document.querySelector(".clock");
    let now = moment().format("YY/MM/DD  dd , HH:mm:ss");
    time.innerHTML = now;
  }
  /////////////////////////// clock
  ////////////////////////////////////////////Subscribe////////////////////////////////////////////
  // Can also be included with a regular script tag
  var typed = new Typed(".Sub-header", {
    strings: ["Subscribe Now", "50% Off For Your First Time", "Only Today"],
    typeSpeed: 30,
    backSpeed: 20,
    loop: true,
    fadeOut: true,
    showCursor: false,
  });
  ////////////////////////////////////////////Subscribe////////////////////////////////////////////

  ////////////////////////////////////////////INPUT////////////////////////////////////////////

  var typed2 = new Typed(".inputes", {
    strings: ["Wanna Subscribe ?", "Write Your Email"],
    typeSpeed: 40,
    backSpeed: 80,
    attr: "placeholder",
    bindInputFocusEvents: false,
    loop: true,
    fadeOut: true,
  });
  ////////////////////////////////////////////INPUT////////////////////////////////////////////

  ////////////////////////////////////////////Up////////////////////////////////////////////
  let dokme = $(".scro");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 800) {
      dokme.addClass("show");
    } else {
      dokme.removeClass("show");
    }
  });

  dokme.on("click", function (e) {
    $("html, body").animate({ scrollTop: 0 }, "500");
    e.preventDefault();
  });
  ////////////////////////////////////////////Up////////////////////////////////////////////

  ////////////////////////////////////////////Darkmode////////////////////////////////////////////
  let Changer = document.querySelector(".Mode");
  let light = document.querySelector(".fa-sun");
  let dark = document.querySelector(".fa-moon");
  Changer.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    Changer.classList.toggle("sun");
    Changer.classList.toggle("moon");
    light.classList.toggle("off");
    dark.classList.toggle("off");
  });

  ////////////////////////////////////////////Darkmode////////////////////////////////////////////
});
