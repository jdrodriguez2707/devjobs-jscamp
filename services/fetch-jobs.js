import { jobsLoading, searchResultsJobContainer } from "../utils/dom.js";
import { renderJobCard } from "../components/job-card.js";

// Obtener lista de empleos desde el archivo JSON
fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((jobs) => {
    setTimeout(() => {
      if (jobsLoading) jobsLoading.remove();

      if (jobs.length == 0) {
        searchResultsJobContainer.innerHTML = `<p class="jobs-loading">🙁 No hay empleos disponible por ahora.</p>`;
      }

      jobs.forEach((job) => {
        searchResultsJobContainer.appendChild(renderJobCard(job));
      });
    }, 500);
  })
  .catch((error) => {
    setTimeout(() => {
      if (jobsLoading) jobsLoading.textContent = "❌ No se pudieron cargar los empleos.";
      console.error(error);
    }, 500);
  });
