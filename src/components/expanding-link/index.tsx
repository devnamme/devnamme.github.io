import { NavLink } from "react-router-dom";
import "./index.css";

interface Props {
  path: string;
  left: string;
  right: string;
}

function ExpandingLink({ path, left, right }: Props) {
  return (
    <NavLink className="expanding-link link" to={path}>
      <p className="left">{left}</p>
      <p className="right">{right}</p>
    </NavLink>
  );
}

export default ExpandingLink;
