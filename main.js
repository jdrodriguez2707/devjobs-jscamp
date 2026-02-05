import {
  jobsLoading,
  jobsCount,
  jobsTotalCount,
  filteredJobsCount,
  searchResultsJobContainer,
  RESULTS_PER_PAGE
} from "./utils/dom.js";
import { loadJobs } from "./services/fetch-jobs.js";
import { jobCard } from "./components/job-card.js";
import { pagination } from "./components/pagination.js";
import "./modules/apply-job.js";
import { handlePageChange, initializePagination } from "./modules/filter-jobs.js";
import "./components/devjobs-avatar-element.js";

const jobs = await loadJobs();

setTimeout(() => {
  if (jobsLoading) jobsLoading.remove();

  if (jobs?.length == 0) {
    searchResultsJobContainer.innerHTML = `<p class="jobs-loading">🙁 No hay empleos disponibles por ahora.</p>`;
  }

  jobs?.forEach((job) => {
    searchResultsJobContainer.appendChild(jobCard(job));
  });

  const totalPages = Math.ceil(jobs.length / RESULTS_PER_PAGE);

  let visibleCount = 0;
  Array.from(searchResultsJobContainer.children).forEach((job, index) => {
    if (index >= RESULTS_PER_PAGE) {
      job.classList.add("hidden");
    } else {
      visibleCount++;
    }
  });

  // Inicializar el array de trabajos visibles para la paginación
  initializePagination();

  pagination(totalPages, 1, handlePageChange);

  // Inicializar y mostrar el conteo de trabajos
  filteredJobsCount.textContent = visibleCount;
  jobsTotalCount.textContent = jobs.length;
  jobsCount.classList.remove("hidden");
}, 500);
