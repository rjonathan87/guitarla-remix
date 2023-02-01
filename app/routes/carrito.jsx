import { useOutletContext } from '@remix-run/react'
import styles from '~/styles/carrito.css'

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

export const meta = () => {
  return {
    title: 'GuitarLA - Carrito de Compra',
    description: 'GuitarLA - Venta de guitarras, música, blog, Carrito de Compra, tienda'
  }
}

const Carrito = () => {
  const { carrito } = useOutletContext()
  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de Compras</h1>
      <div className="contenido">
        <div className="carrito">
          <h2>Artículos</h2>
          {carrito.length === 0 ? 'Carrito Vacío' : (
            carrito.map( producto => (
              <div key={producto.id} className="producto">
                <div>
                  <img 
                    src={producto.imagen} 
                    alt={`Imagen del producto ${producto.nombre}`} 
                  />
                </div>
                <div>
                  <p className="nombre">{producto.nombre}</p>
                  <p className="precio">{producto.precio}</p>
                  <p className="subtotal">Subtotal: $ <span>{producto.cantidad * producto.precio}</span></p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <aside className="resumen">
        <h3>Resumen del Pedido</h3>
        <p>Total a pagar: $</p>
      </aside>
    </main>
  )
}

export default Carrito