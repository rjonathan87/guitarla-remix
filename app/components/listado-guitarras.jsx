import Guitarra from "~/components/guitarra"

const ListadoGuitarras = ({guitarras}) => {
  return (
    <>
      <div className="heading">Nuestra Colección</div>
      {guitarras.length && (
        <div className="guitarras-grid">
          {guitarras.map(guitarra => (
            <Guitarra key={guitarra.id} guitarra={guitarra} />
          ))}
        </div>
      )}
    </>
  )
}

export default ListadoGuitarras