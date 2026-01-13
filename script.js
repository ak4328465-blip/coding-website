document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const problem = btn.closest(".problem");
      const solution = problem.querySelector(".solution");

      if (!solution) {
        alert("Solution div missing!");
        return;
      }

      const isOpen = solution.style.display === "block";

      // close all solutions
      document.querySelectorAll(".solution").forEach(s => {
        s.style.display = "none";
      });

      document.querySelectorAll(".toggle-btn").forEach(b => {
        b.innerText = "Show Solution";
      });

      // open current
      if (!isOpen) {
        solution.style.display = "block";
        btn.innerText = "Hide Solution";
      }
    });
  });
});

