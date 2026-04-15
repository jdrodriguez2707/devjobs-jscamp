function Header() {
  return (
    <header className='jobs-header'>
      <div className='jobs-header__left-container'>
        <h2 className='jobs-header__title'>
          <svg
            aria-label='Logo de DevJobs'
            className='devjobs-logo'
            fill='none'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <polyline points='16 18 22 12 16 6'></polyline>
            <polyline points='8 6 2 12 8 18'></polyline>
          </svg>
          DevJobs
        </h2>
        <nav>
          <ul className='jobs-header__nav-list'>
            <li>
              <a className='jobs-header__nav-link' href='./index.html'>
                Inicio
              </a>
            </li>
            <li>
              <a className='jobs-header__nav-link' href=''>
                Empleos
              </a>
            </li>
            <li>
              <a className='jobs-header__nav-link' href=''>
                Empresas
              </a>
            </li>
            <li>
              <a className='jobs-header__nav-link' href=''>
                Salarios
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className='jobs-header__right-container'>
        <a className='jobs-header__upload-cv-btn' href=''>
          Subir CV
        </a>
        <devjobs-avatar service='github' username='jdrodriguez2707' size='4.8'></devjobs-avatar>
      </div>
    </header>
  )
}

export default Header
