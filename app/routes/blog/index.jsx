import { useLoaderData } from "@remix-run/react"
import ListadoPosts from "~/components/listado-posts"
import { getPosts } from "~/models/posts.server"

export const loader = async () => {
  return await getPosts()
}

const Blog = () => {
  const posts = useLoaderData().data
  console.log(posts)

  return (
    <ListadoPosts posts={posts} />
  )
}

export default Blog