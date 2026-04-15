import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />

      <main className='main-container'>
        <section className='search-job'>
          <h1 className='search-job__title'>Encuentra tu próximo trabajo</h1>
          <p className='search-job__description'>
            Explora miles de oportunidades en el sector tecnológico.
          </p>
          <form role='search' className='search-job__search-form'>
            <div className='search-job__search-container'>
              {/* Icono de búsqueda */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='search-job__search-icon'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0' />
                <path d='M21 21l-6 -6' />
              </svg>
              <label htmlFor='search-job-input' className='sr-only'>
                Buscar ofertas de empleo
              </label>
              <input
                className='search-job__search-input'
                id='search-job-input'
                type='search'
                placeholder='Buscar trabajos, empresas o habilidades'
                name='search-job'
                required
              />
            </div>

            <div className='search-job__filters-container'>
              <div className='search-job__filter-item'>
                {/* Select simulado */}
                <div className='search-job__filter-select-tech' id='filter-select-tech'>
                  <span>Tecnología</span>
                </div>

                <div className='search-job__filter-menu hidden' id='filter-menu-tech'>
                  <div className='search-job__filter-group'>
                    <p className='search-job__filter-group-title'>Frontend</p>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      JavaScript
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      TypeScript
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      React
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      Figma
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      Sketch
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      Adobe XD
                    </label>
                  </div>
                  <hr />
                  <div className='search-job__filter-group'>
                    <p className='search-job__filter-group-title'>Backend</p>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      Python
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      NodeJS
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      Express
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      MySQL
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      PostgreSQL
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      MongoDB
                    </label>
                  </div>
                  <hr />
                  <div className='search-job__filter-group'>
                    <p className='search-job__filter-group-title'>Metodologías ágiles</p>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      Scrum
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      Jira
                    </label>
                  </div>
                  <hr />
                  <div className='search-job__filter-group'>
                    <p className='search-job__filter-group-title'>Otras tecnologías</p>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      AWS
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      Kotlin
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      Swift
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      R
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      Docker
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      SIEM
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      Selenium
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      Linux
                    </label>
                    <label className='search-job__filter-label'>
                      <input
                        name='technology'
                        className='search-job__filter-select search-job__filter-select--checkbox'
                        type='checkbox'
                      />
                      Cisco
                    </label>
                  </div>
                </div>

                {/* Icono de flecha hacia abajo */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='search-job__filter-icon'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M6 9l6 6l6 -6' />
                </svg>
              </div>

              <div className='search-job__filter-item'>
                <label htmlFor='location' className='sr-only'>
                  Ubicación
                </label>
                <select className='search-job__filter-select' name='location' id='location'>
                  <option value='' hidden>
                    Ubicación
                  </option>
                  <option value=''>Todas las ubicaciones</option>
                  <option value='remoto'>En remoto</option>
                  <option value='presencial'>Presencial</option>
                </select>
                {/* Icono de flecha hacia abajo */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='search-job__filter-icon'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M6 9l6 6l6 -6' />
                </svg>
              </div>

              <div className='search-job__filter-item'>
                <label htmlFor='contract' className='sr-only'>
                  Tipo de contrato
                </label>
                <select className='search-job__filter-select' name='contract' id='contract'>
                  <option value='' hidden>
                    Tipo de contrato
                  </option>
                  <option value=''>Cualquier tipo de contrato</option>
                  <option value='temporal'>Temporal</option>
                  <option value='indefinido'>Indefinido</option>
                </select>
                {/* Icono de flecha hacia abajo */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='search-job__filter-icon'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M6 9l6 6l6 -6' />
                </svg>
              </div>

              <div className='search-job__filter-item'>
                <label htmlFor='experience' className='sr-only'>
                  Nivel de experiencia
                </label>
                <select className='search-job__filter-select' name='experience' id='experience'>
                  <option value='' hidden>
                    Nivel de experiencia
                  </option>
                  <option value=''>Cualquier nivel de experiencia</option>
                  <option value='sin-experiencia'>Sin experiencia</option>
                  <option value='junior'>Junior</option>
                  <option value='mid'>Mid</option>
                  <option value='senior'>Senior</option>
                </select>
                {/* Icono de flecha hacia abajo */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='search-job__filter-icon'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path d='M6 9l6 6l6 -6' />
                </svg>
              </div>
            </div>
          </form>
        </section>

        <section className='search-results'>
          <h2 className='search-results__title'>Resultados de búsqueda</h2>
          <div className='search-results__jobs-container'>
            {/* Aquí se mostrará la lista de empleos dinámicamente */}
            <p className='jobs-loading'>Cargando lista de empleos...</p>
          </div>

          <p className='search-results__jobs-count hidden'>
            Mostrando{' '}
            <span
              id='search-results-filtered-jobs'
              className='search-results__jobs-count-number'
            ></span>{' '}
            de{' '}
            <span
              id='search-results-jobs-total'
              className='search-results__jobs-count-number'
            ></span>{' '}
            ofertas de empleo
          </p>

          <nav
            className='search-results__pagination'
            aria-label='Paginación de resultados de búsqueda'
          >
            <ul className='search-results__pagination-list'>
              {/* Los elementos de paginación se generarán dinámicamente aquí */}
            </ul>
          </nav>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
