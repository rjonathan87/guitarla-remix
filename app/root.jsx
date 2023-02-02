import { 
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link
} from '@remix-run/react';
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from './components/footer';
import { useEffect, useState } from 'react';

export function meta(){
  return (
    {
      charset: 'utf-8',
      title: 'GuitarLA - Remix',
      viewport: 'width=device-width, initial-scale=1.0'
    }
  )
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'preconnect',
      href:'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect',
      href:'https://fonts.gstatic.com',
      crossOrigin: 'true'
    },
    {
      rel:'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&display=swap' 
    },
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export default function App(){
  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null
  const [carrito, setCarrito] = useState(carritoLS)

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])
  

  const agregarCarrito = guitarra => {
    if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
      // Iterar sobre el arreglo, e identifica el elemento duplicado
      const carritoActualizado = carrito.map( guitarraState => {
        if( guitarraState.id === guitarra.id ){
          // Reescribir la cantidad
          guitarraState.cantidad = guitarra.cantidad
        }
        return guitarraState
      })
      setCarrito(carritoActualizado)
    }else{
      // la guitarra ya existe
      setCarrito([...carrito, guitarra])
    }
  }
  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map( guitarraState => {
      if(guitarraState.id === guitarra.id) {
        guitarraState.cantidad = guitarra.cantidad
      }
      return guitarraState
    })
    setCarrito(carritoActualizado)
  }
  const eliminarGuitarra = id => {
    if(confirm('Está seguro de  eliminar?')){
      setCarrito(carrito.filter( guitarraState => guitarraState.id !== id))
    }
  }
  return (
    <Document>
      <Outlet
        context={
          {
            agregarCarrito,
            actualizarCantidad,
            eliminarGuitarra,
            carrito
          }
        }
      />
    </Document>
  )
}

function Document({children}){
  return (
    <html lang='en'>
    <head>
      <Meta />
      <Links />
    </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export const CatchBoundary = () => {
  const error  = useCatch()
  return (
    <Document>
      <p className="error">{error.status} {error.statusText}</p>
      <Link to='/' className='error-enlace'>Tal vez quieras volver a la página de inicio</Link>
    </Document>
  )
}

export const ErrorBoundary = ({error}) => {
  return (
    <Document>
      <p className="error">{error.status} {error.statusText}</p>
      <Link to='/' className='error-enlace'>Tal vez quieras volver a la página de inicio</Link>
    </Document>
  )
}