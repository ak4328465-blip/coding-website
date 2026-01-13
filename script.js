document.getElementById("search").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const problems = document.querySelectorAll(".problem");

  problems.forEach(problem => {
    const title = problem.textContent.toLowerCase();
    if (title.includes(query)) {
      problem.style.display = "block";
    } else {
      problem.style.display = "none";
    }
  });
});
