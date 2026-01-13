// Search functionality
const search = document.getElementById("search");
const problems = document.querySelectorAll(".problem");

search.addEventListener("keyup", () => {
  const val = search.value.toLowerCase();
  problems.forEach(p => {
    const key = p.dataset.keywords;
    p.style.display = key.includes(val) ? "block" : "none";
  });
});

// ✅ SHOW / HIDE SOLUTION FUNCTION
function toggleSolution(btn) {
  const solution = btn.nextElementSibling;

  if (solution.style.display === "block") {
    solution.style.display = "none";
    btn.innerText = "Show Solution";
  } else {
    solution.style.display = "block";
    btn.innerText = "Hide Solution";
  }
}
