import { jobCard } from "../components/job-card.js";
import { loadJobs } from "../services/fetch-jobs.js";
jobCard;
import { searchFiltersContainer, filterSelects, searchResultsJobContainer } from "../utils/dom.js";
loadJobs;
const searchJobInput = document.querySelector("#search-job-input");
const jobs = await loadJobs();

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

  console.log(filterValues);

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
    console.log(inputValue);

    const filteredJobs = jobs.filter((job) => {
      const jobTitle = job.titulo.toLowerCase();
      return jobTitle.includes(inputValue);
    });

    console.log(filteredJobs);

    const jobElements = filteredJobs.map((filteredJob) => jobCard(filteredJob));
    searchResultsJobContainer.replaceChildren(...jobElements);
  });
}
