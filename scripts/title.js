document.addEventListener("DOMContentLoaded", () => {
  const textContainer = document.getElementById("text");
  const spans = textContainer.querySelectorAll("span");
  const characters = ["$", "R", "O", "S", "E"];
  const finalOrder = ["$", "E", "S", "O", "R"];

  // Function to apply effects and make letters "fly"
  function applyEffectsAndMove(span) {
    // Random vertical movement
    const moveY =
      Math.random() > 0.5
        ? Math.floor(Math.random() * 20)
        : Math.floor(Math.random() * -20);
    span.style.transform = `translateY(${moveY}px)`;

    // Random timing for the movement back to original position
    setTimeout(() => {
      span.style.transform = "translateY(0)";
    }, Math.random() * 200 + 100); // Adjust timing as needed
  }

  // Function to cycle through characters for each letter
  function cycleCharacters(span, index, startTime, cycleInterval) {
    if (!cycleInterval) cycleInterval = Math.random() * 200 + 100; // Initial random interval

    const currentTime = Date.now();
    if (currentTime - startTime >= 2500) {
      // If time exceeded, finalize the text
      span.textContent = finalOrder[index];
      span.style.transform = "translateY(0)"; // Reset position
      return; // Stop the cycling process
    }

    if (span.textContent !== finalOrder[index]) {
      let nextCharIndex = Math.floor(Math.random() * characters.length);
      span.textContent = characters[nextCharIndex];
      applyEffectsAndMove(span); // Apply moving effect
    }

    setTimeout(
      () => cycleCharacters(span, index, startTime, cycleInterval),
      cycleInterval
    );
  }

  const startTime = Date.now(); // Record start time
  spans.forEach((span, index) => {
    cycleCharacters(span, index, startTime);
  });
});
