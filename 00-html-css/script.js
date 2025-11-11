const searchResultsJobs = document.querySelector(
  ".search-results__jobs-container"
);

searchResultsJobs?.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList.contains("search-results__job-card-apply-btn")) {
    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});

const jobLocationFilter = document.querySelector("#filter-location");
jobLocationFilter?.addEventListener("change", () => {
  const filterValue = jobLocationFilter.value;
  const jobList = Array.from(searchResultsJobs.children); // Convertir a Array para poder usar forEach

  jobList.forEach((job) => {
    if (filterValue === job.dataset.location) {
      job.classList.remove("hidden");
      job.classList.add("visible");
    } else if (filterValue && filterValue !== job.dataset.location) {
      job.classList.remove("visible");
      job.classList.add("hidden");
    } else {
      job.classList.remove("hidden");
      job.classList.add("visible");
    }
  });
});
