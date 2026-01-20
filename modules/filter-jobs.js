import { jobCard } from "../components/job-card.js";
import { loadJobs } from "../services/fetch-jobs.js";
jobCard;
import { searchFiltersContainer, filterSelects, searchResultsJobContainer, searchJobInput, filteredJobsCount } from "../utils/dom.js";
loadJobs;
const jobs = await loadJobs();
const filteredJobs = []; // Array para llevar conteo de trabajos filtrados

filterJobOffersByInput();

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

  const jobList = Array.from(searchResultsJobContainer.children);

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

function filterJobOffersByInput() {
  searchJobInput.addEventListener("input", () => {
    const inputValue = searchJobInput.value.toLowerCase();

    const jobList = Array.from(searchResultsJobContainer.children);

    jobList.forEach((jobElement) => {
      const jobId = jobElement.dataset.id;
      const job = jobs.find((job) => job.id === jobId);

      if (job) {
        const jobTitle = job.titulo.toLowerCase();
        const matchesSearch = jobTitle.includes(inputValue);

        // Contar trabajo filtrado para el contador
        if (matchesSearch) filteredJobs.push(job); 

        jobElement.classList.toggle("hidden", !matchesSearch);
      }
    })

    // Actualizar el contador de trabajos filtrados
    filteredJobsCount.textContent = filteredJobs.length;

    // Limpiar el array para la próxima búsqueda
    filteredJobs.length = 0;
  });
}
