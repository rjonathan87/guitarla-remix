import { useLoaderData } from "@remix-run/react"
import ListadoGuitarras from "~/components/listado-guitarras"

import styleGuitarras from '~/styles/guitarras.css'
import stylePosts from '~/styles/blog.css'
import styleCurso from '~/styles/curso.css'

import { getGuitarras } from "~/models/guitarras.server"
import { getPosts } from "~/models/posts.server"
import ListadoPosts from "~/components/listado-posts"
import { getCurso } from "~/models/curso.server"
import Curso from "~/components/curso"

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styleGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylePosts
    },
    {
      rel: 'stylesheet',
      href: styleCurso
    }
  ]
}
export const loader = async () => {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  return {
    guitarras: guitarras.data, 
    posts: posts.data,
    curso: curso.data
  }
}

const Index = () => {
  const {guitarras, posts, curso} = useLoaderData()
  
  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras guitarras={guitarras} />
      </main>
      <Curso curso={curso} />
      <section className="contenedor">
        <ListadoPosts posts={posts} />
      </section>
    </>
  )
}

export default Index