function toggleSolution(btn) {
  const problemCard = btn.closest(".problem");
  const solution = problemCard.querySelector(".solution");

  if (!solution) {
    alert("Solution not found!");
    return;
  }

  if (solution.style.display === "block") {
    solution.style.display = "none";
    btn.innerText = "Show Solution";
  } else {
    solution.style.display = "block";
    btn.innerText = "Hide Solution";
  }
}
