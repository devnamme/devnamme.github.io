import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RouteHierarchy } from "../../../data/routes";
import ExpandingLink from "../../expanding-link";
import SecondaryNav from "../secondary";
import "./index.css";

function PrimaryNav() {
  const { pathname } = useLocation();

  const [activePath, setActivePath] = useState<string>("");

  useEffect(() => {
    let first = pathname.split("/")[1];
    if (RouteHierarchy[first] != null) setActivePath(pathname);
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
            active={activePath.split("/")[1] == path}
          />
        ))}
      </nav>

      <nav
        className={
          RouteHierarchy[activePath.split("/")[1]] == null ||
          RouteHierarchy[activePath.split("/")[1]].sub == null
            ? "hide"
            : ""
        }
      >
        {RouteHierarchy[activePath.split("/")[1]] != null &&
          RouteHierarchy[activePath.split("/")[1]].sub != null &&
          Object.keys(RouteHierarchy[activePath.split("/")[1]].sub!).map(
            (second: string, idx: number) => (
              <ExpandingLink
                key={`nav-secondary-${idx}`}
                path={`/${activePath.split("/")[1]}/${second}`}
                left={`${
                  RouteHierarchy[activePath.split("/")[1]].sub![second].text
                } //`}
                right=""
                active={activePath.startsWith(
                  `/${activePath.split("/")[1]}/${second}`
                )}
              />
            )
          )}
      </nav>
    </div>
  );
}

export default PrimaryNav;
