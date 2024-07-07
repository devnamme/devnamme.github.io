import { NavLink } from "react-router-dom";
import { FindByPathAndScrollTo } from "../../utils/scroll";
import "./index.css";

interface Props {
  path: string;
  left: string;
  right: string;
  active?: boolean;
}

function ExpandingLink({ path, left, right, active = false }: Props) {
  return (
    <NavLink
      className={`expanding-link link ${active ? "active" : ""}`}
      to={path}
      onClick={() => FindByPathAndScrollTo(path)}
    >
      <p className="left">{left}</p>
      <p className="right">{right}</p>
    </NavLink>
  );
}

export default ExpandingLink;
