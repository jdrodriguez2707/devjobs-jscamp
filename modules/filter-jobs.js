import { jobCard } from "../components/job-card.js";
import { loadJobs } from "../services/fetch-jobs.js";
jobCard;
import {
  searchFiltersContainer,
  filterSelects,
  filterSelectTech,
  filterMenuTech,
  searchResultsJobContainer,
  searchJobInput,
  filteredJobsCount,
  RESULTS_PER_PAGE
} from "../utils/dom.js";
import { pagination } from "../components/pagination.js";

const jobs = await loadJobs();
let filteredJobsNumber = 0; // Variable para llevar conteo de trabajos filtrados
const filteredTechnologies = new Set();
let currentPage = 1;

filterJobOffersByInput();

// Abrir y cerrar menú de filtros de tecnología
filterSelectTech?.addEventListener("click", () => {
  filterMenuTech.classList.toggle("hidden");
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu =
    filterSelectTech?.contains(event.target) || filterMenuTech?.contains(event.target);

  if (!isClickInsideMenu && !filterMenuTech?.classList.contains("hidden")) {
    filterMenuTech.classList.add("hidden");
  }
});

searchFiltersContainer?.addEventListener("change", (event) => {
  if (!document.querySelector(".search-job__clear-filter-btn")) showClearFilterButton();
  filterJobOffers();

  // Cerrar el menú de tecnologías cuando se marca un checkbox
  if (event.target.type === "checkbox" && event.target.name === "technology") {
    filterMenuTech.classList.add("hidden");
  }
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
    if (filterSelect.type === "checkbox") {
      filterSelect.checked = false;
      return;
    }
    filterSelect.value = "";
  });
  currentPage = 1;
  filterJobOffers();
}

function filterJobOffers() {
  const filterValues = {};
  filterSelects.forEach((filterSelect) => {
    // Obtener valores de filtros seleccionados (comprobar si es checkbox o select)
    if (filterSelect.type !== "checkbox") {
      filterValues[filterSelect.id] = filterSelect.value;
      return;
    }

    // Obtener label (valor) asociado al checkbox
    let checkBoxValue = filterSelect.parentNode.innerText.toLowerCase().trim().split(" ").join("-");

    if (filterSelect.checked) {
      filteredTechnologies.add(checkBoxValue);
      filterValues[filterSelect.name] = [...filteredTechnologies];
    } else if (!filterSelect.checked && filteredTechnologies.has(checkBoxValue)) {
      filteredTechnologies.delete(checkBoxValue);
      filterValues[filterSelect.name] = [...filteredTechnologies];
    }
  });

  const jobList = Array.from(searchResultsJobContainer.children);
  const filterKeys = Object.keys(filterValues);
  const visibleJobs = [];

  jobList.forEach((jobElement) => {
    // Comprobar que la oferta de trabajo cumpla con todos los filtros
    const matchesAllFilters = filterKeys.every((filterKey) => {
      const jobDatasetValue = jobElement.dataset[filterKey];

      if (jobDatasetValue) {
        // Comprobar si el filtro corresponde a los checkboxes de tecnología
        if (jobDatasetValue.includes(",")) {
          const jobTechArray = jobDatasetValue.split(",");
          const filteredTechArray = filterValues[filterKey];

          // Comprobar si por lo menos uno de los valores seleccionados en los filtros de tecnología está incluido en las tecnologías de la oferta de trabajo
          const hasMatchingTechnologies = filteredTechArray.some((tech) =>
            jobTechArray.includes(tech)
          );

          return hasMatchingTechnologies || filterValues[filterKey].length === 0;
        }

        return filterValues[filterKey] === jobDatasetValue || filterValues[filterKey] === "";
      } else {
        console.warn(`Job sin data-${filterKey}:`, jobElement);
        // Si el job no tiene este atributo, retonar false para que no cumpla con los filtros y se oculte en el DOM
        return false;
      }
    });

    // Sumar trabajo filtrado al contador
    if (matchesAllFilters) {
      filteredJobsNumber++;
      visibleJobs.push(jobElement);
    }

    // Ocultar o mostrar la oferta de trabajo si coinciden o no todos los filtros
    // jobElement.classList.toggle("hidden", !matchesAllFilters);
    jobElement.classList.add("hidden");

    // Ocultar el menú de filtros de tecnología después de aplicar los filtros
    // setTimeout(() => {
    //   filterMenuTech.classList.add("hidden");
    // }, 500);
  });

  paginateJobs(visibleJobs);

  // Actualizar el contador de trabajos filtrados
  filteredJobsCount.textContent = filteredJobsNumber;

  // Reiniciar contador para la próxima búsqueda
  filteredJobsNumber = 0;
}

function filterJobOffersByInput() {
  searchJobInput.addEventListener("input", () => {
    const inputValue = searchJobInput.value.toLowerCase();
    const jobList = Array.from(searchResultsJobContainer.children);
    const visibleJobs = [];

    jobList.forEach((jobElement) => {
      const jobId = jobElement.dataset.id;
      const job = jobs.find((job) => job.id === jobId);

      if (job) {
        const jobTitle = job.titulo.toLowerCase();
        const matchesSearch = jobTitle.includes(inputValue);

        // Sumar trabajo filtrado al contador
        if (matchesSearch) {
          filteredJobsNumber++;
          visibleJobs.push(jobElement);
        }

        jobElement.classList.add("hidden");
      }
    });

    paginateJobs(visibleJobs);

    // Actualizar el contador de trabajos filtrados
    filteredJobsCount.textContent = filteredJobsNumber;

    // Reiniciar contador para la próxima búsqueda
    filteredJobsNumber = 0;
  });
}

function paginateJobs(visibleJobs) {
  const totalPages = Math.ceil(visibleJobs.length / RESULTS_PER_PAGE);

  const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
  const endIndex = startIndex + RESULTS_PER_PAGE;

  visibleJobs.forEach((job, index) => {
    if (index >= startIndex && index < endIndex) {
      job.classList.remove("hidden");
    }
  });

  pagination(totalPages, currentPage);
}
