M.AutoInit();

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, options);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".parallax");
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".slider");
  let instances = M.Slider.init(elems, {
    height: 400,
    duration: 500,
    indicators: false,
  });
});
