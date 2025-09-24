// --- Part 2: Functions, Scope, Parameters, Return Values ---

// Global variable
let animationCount = 0;

// Function with parameters & return
function calculateAnimationCount(current) {
  return current + 1; // adds one animation
}

// Function to log global vs local scope
function logScope() {
  let localMessage = "I'm inside this function only!";
  console.log(localMessage); // accessible
  console.log("Global count:", animationCount); // uses global
}

// --- Part 3: Combining CSS & JS ---

// Animate the box
const btn = document.getElementById("animateBtn");
const box = document.getElementById("box");

btn.addEventListener("click", () => {
  box.classList.toggle("animate");

  // Update animation count
  animationCount = calculateAnimationCount(animationCount);
  console.log("Box animated", animationCount, "times");
  logScope();
});

// Card flip
const card = document.getElementById("flipCard");
card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

// Modal popup
const modal = document.getElementById("modal");
const openModal = document.getElementById("openModal");
const closeBtn = document.getElementById("closeBtn");

openModal.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
