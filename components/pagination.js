import { paginationList } from "../utils/dom.js";

export function pagination(totalPages, currentPage = 1) {
  // Limpiar la paginación existente para evitar duplicados
  paginationList.innerHTML = "";

  // Flecha anterior
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

  // Números de página
  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("li");
    const pageLink = document.createElement("a");
    pageLink.className = "search-results__pagination-link";
    pageLink.href = "";
    pageLink.textContent = i;

    if (i === currentPage) {
      pageLink.classList.add("is-active");
    }

    pageItem.appendChild(pageLink);
    paginationList.appendChild(pageItem);
  }

  // Flecha siguiente
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
