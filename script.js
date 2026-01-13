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

  const isOpen = sol.style.display === "block";

  sol.style.display = isOpen ? "none" : "block";
  btn.innerText = isOpen ? "Show Solution" : "Hide Solution";
}
