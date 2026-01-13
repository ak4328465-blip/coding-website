document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const problems = document.querySelectorAll(".problem");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    problems.forEach(problem => {
      const text = problem.innerText.toLowerCase();
      problem.style.display = text.includes(query) ? "block" : "none";
    });
  });
});
