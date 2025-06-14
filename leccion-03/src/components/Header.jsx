import "../styles/Header.css";
import Link from "./Link";

function Header() {
  return (
    <>
      <header>
        <h1>Esto es el título YAYY</h1>

        <nav>
          <ul>
            <Link titulo="Contacto" href="https://adalab.es/contacto/" openInNewTab={false} />
            <Link titulo="Blog" href="https://adalab.es/blog/" openInNewTab={true}/>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
