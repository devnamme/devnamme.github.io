import { NavLink } from "react-router-dom";
import "./index.css";

function ExpandingLink({ path, left, right }) {
  return (
    <NavLink className="expanding-link link" to={path}>
      <p className="left">{left}</p>
      <p className="right">{right}</p>
    </NavLink>
  );
}

export default ExpandingLink;
