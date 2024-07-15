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
    <p
      className={`expanding-link link ${active ? "active" : ""}`}
      onClick={() => FindByPathAndScrollTo(path)}
    >
      <span className="left">{left}</span>
      <span className="right">{right}</span>
    </p>
  );
}
