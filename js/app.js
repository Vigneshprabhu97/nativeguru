$(window).on("load", function () {
  setTimeout(() => {
    $(".loader-wrapper").fadeOut("slow");
  }, 2000);
});

setTimeout(() => {
  document.getElementsByClassName("container-fluid")[0].style.visibility = "visible";
  $(".container-fluid").css("max-height", "1000%");
  $(".container-fluid").css("overflow", "visible");

}, 3000);

// Typeit JS
new TypeIt("#company", {
  strings: "Native Guru",
  speed: 450,
  loop: false,
  cursor: false
}).go();

// Vanta JS
VANTA.GLOBE({
  el: "#myGlobe",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xa9d3e6,
  color2: 0xe8a0ce,
  backgroundColor: 0xffffff
})

VANTA.BIRDS({
  el: "#myBirds",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0xffffff,
  color1: 0x3f17cc,
  birdSize: 2.50,
  quantity: 2.00,
  backgroundAlpha: 0.00
})



var mybutton = document.getElementById("scrollBtn");

function scrollToTop() {
  window.pageYOffset = 0;
  document.documentElement.scrollTop = 0;
}

$(".homebtn").on("click", () => {
  scrollToTop();
});

var count = 0;

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
});

window.addEventListener("scroll", function () {
  if (count <= 1) {
    if (window.pageYOffset > 1620) {
      $(".modal-bg").css("display", "flex");
      count = count + 1;
    }
  }
});

function close_modal() {
  $(".modal-bg").css("display", "none");
}


// To Find Overflowing Element in the document

// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function (el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );