/* import PropTypes from "prop-types"; */

function Link({ titulo, href, openInNewTab }) {
  return (
    <li className="menu-item">
      <a title={titulo} className="menu-link" href={href} target={openInNewTab ? "_blank" : "_self"}>
        {titulo}
      </a>
    </li>
  );
}

export default Link;
