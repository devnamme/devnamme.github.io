import { useLocation } from "react-router-dom";
import ExpandingLink from "../../expanding-link";
import SecondaryNav from "../secondary";
import "./index.css";
import { useEffect, useState } from "react";
import { RouteHierarchy, PrimaryRoute } from "../../../data/routes";

function PrimaryNav() {
  const { pathname } = useLocation();

  const [activePath, setActivePath] = useState<string>("");

  useEffect(() => {
    let first = pathname.split("/")[1];
    if (RouteHierarchy[first] != null && RouteHierarchy[first].sub != null)
      setActivePath(first);
  }, [pathname]);

  return (
    <div className="primary-nav">
      <h1 className={`title ${pathname == "/" ? "hide" : ""}`}>
        Emman Evangelista
      </h1>

      <SecondaryNav />

      <nav>
        {Object.keys(RouteHierarchy).map((path: string, idx: number) => (
          <ExpandingLink
            key={`nav-primary-${idx}`}
            path={`/${path}`}
            left={`0${idx + 1} //`}
            right={RouteHierarchy[path].text}
          />
        ))}
      </nav>

      <nav
        className={
          RouteHierarchy[pathname.split("/")[1]] == null ||
          RouteHierarchy[pathname.split("/")[1]].sub == null
            ? "hide"
            : ""
        }
      >
        {RouteHierarchy[activePath] != null &&
          RouteHierarchy[activePath].sub != null &&
          Object.keys(RouteHierarchy[activePath].sub).map(
            (second: string, idx: number) => (
              <ExpandingLink
                key={`nav-secondary-${idx}`}
                path={`/${activePath}/${second}`}
                left={`${RouteHierarchy[activePath].sub![second].text} //`}
                right=""
              />
            )
          )}
      </nav>
    </div>
  );
}

export default PrimaryNav;
