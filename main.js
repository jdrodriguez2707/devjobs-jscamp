import { jobsLoading, jobsCount, jobsTotalCount, filteredJobsCount, searchResultsJobContainer } from "./utils/dom.js";
import { loadJobs } from "./services/fetch-jobs.js";
import { jobCard } from "./components/job-card.js";
import "./modules/apply-job.js";
import "./modules/filter-jobs.js";
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

  // Inicializar y mostrar el conteo de trabajos
  filteredJobsCount.textContent = jobs.length;
  jobsTotalCount.textContent = jobs.length;
  jobsCount.classList.remove("hidden");
}, 500);
