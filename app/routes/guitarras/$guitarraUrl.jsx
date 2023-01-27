import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"

export const loader = async({request, params}) => {
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
  const guitarra = useLoaderData().data;
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes
  return (
    <div className="guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <div className="texto">{descripcion}</div>
        <div className="precio">${precio}</div>
      </div>
    </div>
  )
}

export default Guitarra