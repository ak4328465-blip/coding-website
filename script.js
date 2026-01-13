const search = document.getElementById("search");
const problems = document.querySelectorAll(".problem");

search.addEventListener("input", () => {
  const val = search.value.toLowerCase().trim();

  problems.forEach(p => {
    const key = p.dataset.keywords.toLowerCase();

    if (val === "") {
      p.style.display = "block";   // 👈 IMPORTANT FIX
    } else if (key.includes(val)) {
      p.style.display = "block";
    } else {
      p.style.display = "none";
    }
  });
});

// Toggle solution (matches your HTML)
function toggleSolution(btn) {
  const sol = btn.nextElementSibling;
  sol.style.display = sol.style.display === "block" ? "none" : "block";
}
