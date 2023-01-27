import { useLoaderData } from "@remix-run/react";
import Guitarra from "~/components/guitarra";
import ListadoGuitarras from "~/components/listado-guitarras";
import { getGuitarras } from "~/models/guitarras.server";
import styles from '~/styles/guitarras.css';

export function meta() {
  return {
    title: 'GuitarLA - Tienda de Guitarras',
    description: 'GuitarLA - Nuestra colección de guitarras'
  }
}

export async function loader(){
  return await getGuitarras()
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

const Tienda = () => {
  const guitarras = useLoaderData();
  
  return (
    <main className="contenedor">
      <ListadoGuitarras guitarras={guitarras.data} />
    </main>
  )
}

export default Tienda