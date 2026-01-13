document.addEventListener("DOMContentLoaded", function () {

  const search = document.getElementById("search");
  const problems = document.querySelectorAll(".problem");

  search.addEventListener("keyup", () => {
    const val = search.value.toLowerCase();
    problems.forEach(p => {
      const key = (p.dataset.keywords || p.innerText).toLowerCase();
      p.style.display = key.includes(val) ? "block" : "none";
    });
  });

});

function toggleSolution(btn) {
  const problem = btn.closest(".problem");
  const sol = problem.querySelector(".solution");

  if (!sol) {
    alert("Solution div not found");
    return;
  }

  if (sol.style.display === "block") {
    sol.style.display = "none";
    btn.innerText = "Show Solution";
  } else {
    sol.style.display = "block";
    btn.innerText = "Hide Solution";
  }
}
/* 🌙 Dark Mode Toggle */
const toggleBtn = document.getElementById("darkToggle");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleBtn.textContent =
      document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
}

/* ⭐ Copy Code Button */
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const code = btn.nextElementSibling.innerText;
    navigator.clipboard.writeText(code);
    btn.innerText = "Copied ✔";
    setTimeout(() => btn.innerText = "Copy Code", 1500);
  });
});

/* ✨ Smooth Animation */
document.querySelectorAll(".problem").forEach((card, i) => {
  card.style.opacity = 0;
  card.style.transform = "translateY(20px)";
  setTimeout(() => {
    card.style.transition = "0.5s";
    card.style.opacity = 1;
    card.style.transform = "translateY(0)";
  }, i * 100);
});
