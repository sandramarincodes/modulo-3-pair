/* import PropTypes from "prop-types"; */

function Link({ title, href }) {
  return (
    <li className="menu-item">
      <a title={title} className="menu-link" href={href}>
        {title}
      </a>
    </li>
  );
}

export default Link;
