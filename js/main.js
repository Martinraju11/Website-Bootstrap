$(".resp").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    620: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 3,
      nav: true,
      loop: false,
    },
  },
});

$(".ref").owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    620: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 2,
      nav: true,
      loop: false,
    },
  },
});
var menu = document.getElementById("menu");
var pan = document.getElementById("pan");
menu.addEventListener("click", function () {
  pan.style.visibility = "visible";
  pan.classList.add("pl");
});
var close = document.getElementById("cl");
close.addEventListener("click", function () {
  pan.style.visibility = "hidden";
  pan.classList.remove("pl");
});
var btns = document.querySelectorAll(".side-1");
console.log(btns);
btns.forEach((element) => {
  element.addEventListener("click", function () {
    pan.style.visibility = "hidden";
  });
});
