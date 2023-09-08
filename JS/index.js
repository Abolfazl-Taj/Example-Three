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
    time.innerHTML = now
  }
  /////////////////////////// clock
});
