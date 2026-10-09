(function () {
  var header = document.getElementById("top");
  if (!header) return;
  var onScroll = function () {
    header.classList.toggle("scrolled", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
