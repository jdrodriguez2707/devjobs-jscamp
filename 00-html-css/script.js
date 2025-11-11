// const applyButton = document.querySelector("#button");
// console.log(applyButton);

// if (applyButton) {
//   applyButton.addEventListener("click", () => {
//     applyButton.textContent = "¡Aplicado!";
//     applyButton.classList.add("is-applied");
//     applyButton.disabled = true;
//   });
// }

// const applyButtons = document.querySelectorAll(
//   ".search-results__job-card-apply-btn"
// );

// applyButtons.forEach((applyButton) => {
//   let isApplied = false;
//   applyButton.addEventListener("click", () => {
//     isApplied = isApplied ? false : true;
//     applyButton.textContent = isApplied ? "¡Aplicado!" : "Aplicar";
//     applyButton.classList.toggle("is-applied");
//   });
// });

const searchResultsJobs = document.querySelector(
  ".search-results__jobs-container"
);

searchResultsJobs.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList.contains("search-results__job-card-apply-btn")) {
    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});
