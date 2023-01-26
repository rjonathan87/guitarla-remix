
export async function loader(){
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const resultado = await respuesta.json()

  console.log(resultado)
  return {}
}

const Tienda = () => {
  return (
    <div>Tienda</div>
  )
}

export default Tienda