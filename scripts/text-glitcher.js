document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const textSpans = document.querySelectorAll("#text span");
    textSpans.forEach((span) => {
      span.classList.add("pulsating-glow");
    });
  }, 4000); // Starts the effect 4 seconds after the page loads
});
