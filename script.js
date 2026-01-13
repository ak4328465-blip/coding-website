document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const problems = document.querySelectorAll(".problem");

  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();

    problems.forEach(function (problem) {
      const text = problem.innerText.toLowerCase();

      if (text.includes(query)) {
        problem.style.display = "block";
      } else {
        problem.style.display = "none";
      }
    });
  });
});
