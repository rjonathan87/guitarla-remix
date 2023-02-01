import { useLoaderData, useOutletContext } from "@remix-run/react"
import { useState } from "react"
import { getGuitarra } from "~/models/guitarras.server"

export const loader = async({params}) => {
  const {guitarraUrl} = params
  const guitarra = await getGuitarra(guitarraUrl)

  if(guitarra.data.length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada'
    })
  }
  return  guitarra
}

export const meta =({data}) => {
  if(!data){
    return {
      title: `GuitarLA - guitarra no encontrada`,
      description: `GuitarLA - Venta de guitarras, guitarra no encontrada`
    }
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    description: `GuitarLA - Venta de guitarras, guitarra ${data.data[0].attributes.nombre}`
  }
}

const Guitarra = () => {
  const {agregarCarrito} = useOutletContext()
  const [cantidad, setCantidad] = useState(0)
  const guitarra = useLoaderData().data;
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes
  const handleSubmit = e => {
    e.preventDefault()
    if(cantidad <= 0)
    {
      alert('Debes seleccionar una cantidad')
      return
    }
    const guitarraSeleccionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre, precio, cantidad
    }
    agregarCarrito(guitarraSeleccionada)
  }
  
  return (
    <div className="guitarra">
      <img className="imagen" 
        src={imagen.data.attributes.url} 
        alt={`Imagen de la guitarra ${nombre}`} 
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <div className="texto">{descripcion}</div>
        <div className="precio">${precio}</div>
        <form 
          className="formulario" 
          onSubmit={handleSubmit}
        >
          <label htmlFor="cantidad">Cantidad</label>
          <select 
            id="cantidad"
            onChange={ e => setCantidad( +e.target.value ) }
          >
            <option value="0">Seleccione</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Agregar al Carrito" />
        </form>
      </div>
    </div>
  )
}

export default Guitarra