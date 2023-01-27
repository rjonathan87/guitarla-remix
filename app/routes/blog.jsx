import { useLoaderData } from "@remix-run/react"
import ListadoPosts from "~/components/listado-posts"
import { getPosts } from "~/models/posts.server"

import styles from '~/styles/blog.css'

export const loader = async () => {
  return await getPosts()
}

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

const Blog = () => {
  const posts = useLoaderData().data
  console.log(posts)

  return (
    <main className="contenedor">
      <ListadoPosts posts={posts} />
    </main>
  )
}

export default Blog