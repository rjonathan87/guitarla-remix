import imagen from "../../public/img/nosotros.jpg";
import styles from '~/styles/nosotros.css'
import { useOutletContext } from "@remix-run/react";

export function meta(){
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de música'
  }
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  const context = useOutletContext()
  console.log(context)
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="imagen sobre nosotros" />
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, doloremque. Nemo laboriosam id vero! Vero nam explicabo id? Eaque, cupiditate! Illum veniam atque tempore repellat blanditiis molestiae, officiis fuga eaque?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ipsa eveniet, magni, consequuntur, commodi tempore corporis alias maxime cupiditate totam voluptatem fuga autem veritatis nobis qui vero mollitia nam obcaecati!</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros