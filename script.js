const search = document.getElementById("search");
const problems = document.querySelectorAll(".problem");

search.addEventListener("keyup", () => {
  const val = search.value.toLowerCase();
  problems.forEach(p => {
    const key = (p.dataset.keywords || p.innerText).toLowerCase();
    p.style.display = key.includes(val) ? "block" : "none";
  });
});

function toggleSolution(btn) {
  const problem = btn.closest(".problem");
  const sol = problem.querySelector(".solution");

  if (!sol) return;

  if (sol.style.display === "block") {
    sol.style.display = "none";
    btn.innerText = "Show Solution";
  } else {
    sol.style.display = "block";
    btn.innerText = "Hide Solution";
  }
}
