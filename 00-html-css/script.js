const searchResultsJobs = document.querySelector(".search-results__jobs-container");

searchResultsJobs?.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList.contains("search-results__job-card-apply-btn")) {
    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});

const searchFilters = document.querySelector(".search-job__filters-container");

// searchFilters.addEventListener("change", (event) => {
//   const filter = event.target;
//   filter.children[0].hidden = true; // Ocultar primer option por defecto cuando el select cambie
//   const filterValue = filter.value;
//   const jobList = Array.from(searchResultsJobs.children); // Convertir a Array para poder usar forEach
//   const filterId = filter.id; // Obtener id del select seleccionado para acceder al dataset en especifico

//   jobList.forEach((job) => {
//     if (filterValue === job.dataset[filterId]) {
//       job.classList.remove("hidden");
//       job.classList.add("visible");
//     } else if (filterValue && filterValue !== job.dataset[filterId]) {
//       job.classList.remove("visible");
//       job.classList.add("hidden");
//     } else {
//       job.classList.remove("hidden");
//       job.classList.add("visible");
//     }
//   });
// });

searchFilters.addEventListener("change", (event) => {
  const currentSelect = event.target;
  currentSelect.children[0].hidden = true; // Ocultar primer option por defecto cuando el select cambie
  const selects = Array.from(document.querySelectorAll(".search-job__filter-select"));
  const selectValues = selects.map((select) => select.value);
  console.log(selectValues);

  const jobList = Array.from(searchResultsJobs.children); // Convertir a Array para poder usar forEach

  for (let i = 0; i < jobList.length; i++) {
    if (
      (jobList[i].dataset.technology === selectValues[0] || selectValues[0] === "") &&
      (jobList[i].dataset.location === selectValues[1] || selectValues[1] === "") &&
      (jobList[i].dataset.contract === selectValues[2] || selectValues[2] === "") &&
      (jobList[i].dataset.experience === selectValues[3] || selectValues[3] === "")
    ) {
      jobList[i].classList.remove("hidden");
      jobList[i].classList.add("visible");
    } else {
      jobList[i].classList.remove("visible");
      jobList[i].classList.add("hidden");
    }
  }
});
