const searchResultsJobs = document.querySelector(".search-results__jobs-container");
const searchFiltersContainer = document.querySelector(".search-job__filters-container");
const filterSelects = document.querySelectorAll(".search-job__filter-select");

searchResultsJobs?.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList.contains("search-results__job-card-apply-btn")) {
    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});

searchFiltersContainer?.addEventListener("change", () => {
  if (!document.querySelector(".search-job__clear-filter-btn")) showClearFilterButton();
  filterJobOffers();
});

function showClearFilterButton() {
  const clearFilterButton = document.createElement("button");
  clearFilterButton.classList.add("search-job__clear-filter-btn");
  clearFilterButton.textContent = "Limpiar filtros";
  clearFilterButton.ariaLabel = "Botón para limpiar filtros de búsqueda de ofertas de trabajo";
  clearFilterButton.type = "button";
  clearFilterButton.onclick = (event) => clearFilters(event.currentTarget);
  searchFiltersContainer.appendChild(clearFilterButton);
}

function clearFilters(filterButton) {
  filterButton.remove();
  filterSelects.forEach((filterSelect) => {
    filterSelect.value = "";
  });
  filterJobOffers();
}

function filterJobOffers() {
  const filterValues = {};
  filterSelects.forEach((filterSelect) => {
    filterValues[filterSelect.id] = filterSelect.value;
  });

  console.log(filterValues);

  // Convertir a Array para poder usar bucle for
  const jobList = Array.from(searchResultsJobs.children);

  for (const job of jobList) {
    if (
      (job.dataset.technology === filterValues.technology || filterValues.technology === "") &&
      (job.dataset.location === filterValues.location || filterValues.location === "") &&
      (job.dataset.contract === filterValues.contract || filterValues.contract === "") &&
      (job.dataset.experience === filterValues.experience || filterValues.experience === "")
    ) {
      job.classList.remove("hidden");
      job.classList.add("visible");
    } else {
      job.classList.remove("visible");
      job.classList.add("hidden");
    }
  }
}
