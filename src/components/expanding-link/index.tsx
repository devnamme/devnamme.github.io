import { Link } from "react-router-dom";
import { FindByPathAndScrollTo } from "../../utils/scroll";
import "./index.css";

interface Props {
  path: string;
  left: string;
  right: string;
  active?: boolean;
}

export default function ExpandingLink({
  path,
  left,
  right,
  active = false,
}: Props) {
  return (
    <Link
      className={`expanding-link link ${active ? "active" : ""}`}
      to={path}
      onClick={() => FindByPathAndScrollTo(path)}
    >
      <p className="left">{left}</p>
      <p className="right">{right}</p>
    </Link>
  );
}
