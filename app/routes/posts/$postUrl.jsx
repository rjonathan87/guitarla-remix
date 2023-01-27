import { Link, useLoaderData } from "@remix-run/react"
import styles from "~/styles/blog.css";
import { getPost } from "~/models/posts.server"
import { formatearFecha } from "~/utils/helpers"

export const loader = async({request, params}) => {
  const postUrl = params.postUrl
  const post = await getPost(postUrl)

  if(post.data.length === 0){
    throw new Response('', {
      status: 404,
      statusText: 'Entrada no encontrada'
    })
  }
  
  return post.data[0]
}

export const links  = () => [
  {
    rel: 'stylesheet',
    href: styles
  }
]

export const meta =({data}) => {
  if(!data){
    return {
      title: `GuitarLA - entrada no encontrada`,
      description: `GuitarLA - Blog de guitarras, entrada no encontrada`
    }
  }
  return {
    title: `GuitarLA - ${data.attributes.titulo}`,
    description: `GuitarLA - Blog de guitarras, entrada ${data.attributes.titulo}`
  }
}

const Post = () => {
  const post = useLoaderData()
  const attrs = post.attributes
  const {titulo, contenido, imagen, publishedAt} = attrs

  return (
    <article className="contenedor post">
      <img src={imagen.data.attributes.url} alt={`Imagen Post ${titulo}`} className="imagen" />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">
          {contenido}
        </p>
        <Link to='/blog' className="enlace">Volver</Link>
      </div>
    </article>
  )
}

export default Post