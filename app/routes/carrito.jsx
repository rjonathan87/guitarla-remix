import { useOutletContext } from '@remix-run/react'
import { useEffect, useState } from 'react'
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
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext()
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const calculoTotal = carrito.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0 )
    setTotal(calculoTotal)
  }, [carrito])
  
  return (
    <main className="contenedor">
      <h1 className="heading">Carrito de Compras</h1>
      <h2>Artículos</h2>
      <div className="contenido">
        <div className="carrito">
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
                  <p className="precio">${producto.precio}</p>
                  <p>Cantidad</p>
                  <select 
                    id="cantidad" 
                    className="cantidad"
                    value={producto.cantidad}
                    onChange={ e => actualizarCantidad({
                      cantidad: +e.target.value,
                      id: producto.id
                    })}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <p className="subtotal">Subtotal: $ <span>{producto.cantidad * producto.precio}</span></p>
                </div>
                <button 
                  type="button" 
                  className="btn_eliminar"
                  onClick={() => eliminarGuitarra(producto.id) }
                >X</button>
              </div>
            ))
          )}
        </div>
        <aside className="resumen">
          <h3>Resumen del Pedido</h3>
          <p>Total a pagar: ${total}</p>
        </aside>
      </div>
    </main>
  )
}

export default Carrito