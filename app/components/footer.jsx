import Navegacion from "./navegacion";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contenedor contenido">
        <Navegacion />
        <p className="copyright">Todos los derechos reservados { new Date().getFullYear() }</p>
      </div>
    </div>
  );
};

export default Footer;
