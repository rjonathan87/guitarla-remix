import { Link } from "@remix-run/react"
import { formatearFecha } from "~/utils/helpers"

export const Post = ({post}) => {
  const { titulo, contenido, imagen, url, publishedAt } = post
  return (
    <article className="post">
      <img className="imagen" src={imagen.data.attributes.formats.small.url} alt={`Imagen del Post ${titulo}`} />
      <div className="contenido">
        <h3 className="titulo">{titulo}</h3>
        <p className="fecha">{ formatearFecha(publishedAt) }</p>
        <p className="resumen">{contenido}</p>
        <Link className="enlace" to={`/posts/${url}`}>Leer Post</Link>
      </div>
    </article>
  )
} 