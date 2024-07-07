import { useLocation } from "react-router-dom";
import ExpandingLink from "../../expanding-link";
import SecondaryNav from "../secondary";
import "./index.css";
import { useEffect, useState } from "react";

function PrimaryNav() {
  const { pathname } = useLocation();

  const [activePath, setActivePath] = useState("");

  const primaryLinks: string[][] = [
    ["/", "About"],
    ["/works", "Works"],
    ["/produced", "Produced"],
    ["/awards", "Awards"],
    ["/experiences", "Experiences"],
  ];

  const secondaryLinks: {
    works: string[][];
    produced: string[][];
    [key: string]: string[][];
  } = {
    works: [
      ["/works/web", "Web"],
      ["/works/mobile", "Mobile"],
      ["/works/game", "Game"],
    ],
    produced: [
      ["/produced/articles", "Articles"],
      ["/produced/videos", "Videos"],
      ["/produced/issues", "Issues"],
    ],
  };

  useEffect(() => {
    let first = pathname.split("/")[1];
    if (secondaryLinks[first] != null && secondaryLinks[first].length > 0)
      setActivePath(first);
  }, [pathname]);

  return (
    <div className="primary-nav">
      <h1 className={`title ${pathname == "/" ? "hide" : ""}`}>
        Emman Evangelista
      </h1>

      <SecondaryNav />

      <nav>
        {primaryLinks.map((link: string[], idx: number) => (
          <ExpandingLink
            key={`nav-primary-${idx}`}
            path={link[0]}
            left={`0${idx + 1} //`}
            right={link[1]}
          />
        ))}
      </nav>

      <nav
        className={
          secondaryLinks[pathname.split("/")[1]] == null ||
          secondaryLinks[pathname.split("/")[1]].length == 0
            ? "hide"
            : ""
        }
      >
        {secondaryLinks[activePath] != null &&
          secondaryLinks[activePath].map((link: string[], idx: number) => (
            <ExpandingLink
              key={`nav-secondary-${idx}`}
              path={link[0]}
              left={`${link[1]} //`}
              right=""
            />
          ))}
      </nav>
    </div>
  );
}

export default PrimaryNav;
