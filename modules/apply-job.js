import { searchResultsJobContainer } from '../utils/dom.js'

searchResultsJobContainer?.addEventListener('click', event => {
  const element = event.target
  if (element.classList.contains('search-results__job-card-apply-btn')) {
    element.textContent = '¡Aplicado!'
    element.classList.add('is-applied')
    element.disabled = true
  }
})
