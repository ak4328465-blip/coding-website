const searchInput = document.getElementById("search");
const problems = document.querySelectorAll(".problem");

searchInput.addEventListener("keyup", function () {
  const value = searchInput.value.toLowerCase();

  problems.forEach(problem => {
    const text = problem.innerText.toLowerCase();
    if (text.includes(value)) {
      problem.style.display = "block";
    } else {
      problem.style.display = "none";
    }
  });
});

