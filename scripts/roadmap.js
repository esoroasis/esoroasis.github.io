document.addEventListener("DOMContentLoaded", () => {
  const listItems = document.querySelectorAll("#roadmap ul li");
  const totalDuration = 8; // Total duration of one cycle per item
  const visiblePhase = 1.5; // Time before the next item starts fading in

  listItems.forEach((item, index) => {
    // Calculate delay to make transitions overlap
    // Each item starts fading in exactly as the previous starts fading out
    const delay = index * visiblePhase; // Stagger each item's start time
    item.style.animationDelay = `${delay}s`;

    // Apply the CSS class for animation
    item.classList.add("fade-in-out-overlap");
  });

  // Calculate total animation cycle time
  const cycleTime = (listItems.length - 1) * visiblePhase + totalDuration;
  // Repeat the animation for each item after the full cycle completes
  listItems.forEach((item) => {
    item.style.animationDuration = `${cycleTime}s`;
  });
});
