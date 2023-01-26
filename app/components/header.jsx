import { Link } from '@remix-run/react'
import logo from '../../public/img/logo.svg';
import Navegacion from './navegacion';

const Header = () => {
  return (
    <header className='header'>
      <div className='contenedor barra'>
        <Link to='/'>
          <img src={logo} alt='logotipo' className='logo' />
        </Link>

        <Navegacion />
      </div>
    </header>
  )
}

export default Header