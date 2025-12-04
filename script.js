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
  clearFilterButton.onclick = () => clearFilters(clearFilterButton);
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

  const jobList = Array.from(searchResultsJobs.children);

  const filterKeys = Object.keys(filterValues);

  jobList.forEach((job) => {
    // Comprobar que la oferta de trabajo cumpla con todos los filtros
    const matchesAllFilters = filterKeys.every((filterKey) => {
      if (job.dataset[filterKey]) {
        const jobDatasetValue = job.dataset[filterKey];
        return filterValues[filterKey] === jobDatasetValue || filterValues[filterKey] === "";
      } else {
        // console.warn(`Job sin data-${filterKey}:`, job);
        // Si el job no tiene este atributo, retonar false para que no cumpla con los filtros y se oculte en el DOM
        return false;
      }
    });

    // Ocultar o mostrar la oferta de trabajo si coinciden o no todos los filtros
    job.classList.toggle("hidden", !matchesAllFilters);
  });
}
