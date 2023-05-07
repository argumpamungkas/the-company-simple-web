// Slidenav Navbar
const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav);

//   Slider Header
const sliderImg = document.querySelectorAll(".slider");
M.Slider.init(sliderImg, {
  indicators: false,
  height: 500,
  duration: 800,
  interval: 3000,
});

// Parallax
const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

// Portfolio material box
const imgMaterial = document.querySelectorAll(".materialboxed");
M.Materialbox.init(imgMaterial);

// Scrollspy
const scrollSpy = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scrollSpy, {
  scrollOffset: 50,
});
