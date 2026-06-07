let scrollToTop = document.getElementById("scrollToTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});

scrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
