import {
  jobsLoading,
  jobsCount,
  jobsTotalCount,
  filteredJobsCount,
  searchResultsJobContainer,
  paginationList
} from "./utils/dom.js";
import { loadJobs } from "./services/fetch-jobs.js";
import { jobCard } from "./components/job-card.js";
import "./modules/apply-job.js";
import "./modules/filter-jobs.js";
import "./components/devjobs-avatar-element.js";

const jobs = await loadJobs();
const RESULTS_PER_PAGE = 3;

setTimeout(() => {
  if (jobsLoading) jobsLoading.remove();

  if (jobs?.length == 0) {
    searchResultsJobContainer.innerHTML = `<p class="jobs-loading">🙁 No hay empleos disponibles por ahora.</p>`;
  }

  jobs?.forEach((job) => {
    searchResultsJobContainer.appendChild(jobCard(job));
  });

  const totalPages = Math.ceil(jobs.length / RESULTS_PER_PAGE);

  Array.from(searchResultsJobContainer.children).forEach((job, index) => {
    if (index >= RESULTS_PER_PAGE) {
      job.classList.add("hidden");
    }
  });

  renderInitialPagination(totalPages);

  // Inicializar y mostrar el conteo de trabajos
  filteredJobsCount.textContent = jobs.length;
  jobsTotalCount.textContent = jobs.length;
  jobsCount.classList.remove("hidden");
}, 500);

function renderInitialPagination(totalPages) {
  paginationList.innerHTML = "";

  const prevArrow = document.createElement("li");
  prevArrow.innerHTML = `
    <a class="search-results__pagination-arrow" href="">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="search-results__pagination-icon">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 6l-6 6l6 6" />
      </svg>
    </a>
  `;
  paginationList.appendChild(prevArrow);

  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("li");
    const pageLink = document.createElement("a");
    pageLink.className = "search-results__pagination-link";
    pageLink.href = "";
    pageLink.textContent = i;

    if (i === 1) {
      pageLink.classList.add("is-active");
    }

    pageItem.appendChild(pageLink);
    paginationList.appendChild(pageItem);
  }

  const nextArrow = document.createElement("li");
  nextArrow.innerHTML = `
    <a class="search-results__pagination-arrow" href="">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="search-results__pagination-icon">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9 6l6 6l-6 6" />
      </svg>
    </a>
  `;
  paginationList.appendChild(nextArrow);
}
