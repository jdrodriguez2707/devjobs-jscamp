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

searchFilters.addEventListener("change", (event) => {
  const filter = event.target;
  filter.children[0].hidden = true; // Ocultar primer option por defecto cuando el select cambie
  const filterValue = filter.value;
  const jobList = Array.from(searchResultsJobs.children); // Convertir a Array para poder usar forEach
  const filterId = filter.id; // Obtener id del select seleccionado para acceder al dataset en especifico

  jobList.forEach((job) => {
    if (filterValue === job.dataset[filterId]) {
      job.classList.remove("hidden");
      job.classList.add("visible");
    } else if (filterValue && filterValue !== job.dataset[filterId]) {
      job.classList.remove("visible");
      job.classList.add("hidden");
    } else {
      job.classList.remove("hidden");
      job.classList.add("visible");
    }
  });
});
