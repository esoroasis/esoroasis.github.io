document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const fadeInOnScroll = () => {
    sections.forEach((section) => {
      if (section.id !== "splash") {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          section.style.opacity = 1;
        }
      }
    });
  };

  window.addEventListener("scroll", fadeInOnScroll);

  // Optionally, run once on load in case sections are initially in view
  fadeInOnScroll();
});
