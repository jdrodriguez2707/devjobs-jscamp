export const renderJobCard = (job) => {
  const articleJob = document.createElement("article");
  articleJob.className = "search-results__job-card";
  articleJob.dataset.location = job.data.location;
  articleJob.dataset.technology = job.data.technology;
  articleJob.dataset.contract = job.data.contract;
  articleJob.dataset.experience = job.data.experience;

  articleJob.innerHTML = `<div>
              <h3 class="search-results__job-card-title">${job.titulo}</h3>
              <p class="search-results__job-card-company">
                <span>${job.empresa}</span> |
                <span>${job.ubicacion}</span>
              </p>
              <p class="search-results__job-card-description">
                ${job.descripcion}
              </p>
            </div>
            <button class="search-results__job-card-apply-btn">Aplicar</button>`;

  return articleJob;
};
