import { Link, useLocation } from "@remix-run/react"

const Navegacion = () => {
  const location = useLocation();

  return (
    <div className='navigation'>
      <div className='navigation'>
          <Link to='/' className={location.pathname === '/' ? 'active' : ''}>
            Inicio
          </Link>
          <Link to='/nosotros' className={location.pathname === '/nosotros' ? 'active' : ''}>
            Nosotros
          </Link>
          <Link to='/tienda' className={location.pathname === '/tienda' ? 'active' : ''}>
            Tienda
          </Link>
          <Link to='/blog' className={location.pathname === '/blog' ? 'active' : ''}>
            Blog
          </Link>
        </div>
    </div>
  )
}

export default Navegacion