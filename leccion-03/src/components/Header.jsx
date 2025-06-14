import "../styles/Header.css";
import Link from "./Link";

function Header() {
  return (
    <>
      <header>
        <h1>Esto es el título YAYY</h1>

        <nav>
          <ul>
            <Link title="Hola" />
            <Link title="Contacto" href="https://adalab.es/blog/" />
            <Link title="Suscripción" />
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
