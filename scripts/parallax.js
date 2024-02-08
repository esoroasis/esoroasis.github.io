document.addEventListener("scroll", function () {
  const scrollPosition = window.pageYOffset;
  document.body.style.backgroundPositionY = -(scrollPosition * 0.7) + "px";
});
