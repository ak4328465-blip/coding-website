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
  const sol = btn.nextElementSibling;
  sol.style.display = sol.style.display === "block" ? "none" : "block";
}

