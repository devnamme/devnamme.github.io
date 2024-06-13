import { useParams } from "react-router-dom";
import ExpandingLink from "../../expanding-link";
import SecondaryNav from "../secondary";
import "./index.css";

function PrimaryNav() {
  const params = useParams();

  const primaryLinks = [
    ["/", "About"],
    ["/works", "Works"],
    ["/produced", "Produced"],
    ["/awards", "Awards"],
    ["/experiences", "Experiences"],
  ];

  const secondaryLinks = {
    about: [],
    works: [
      ["/works/web", "Web"],
      ["/works/mobile", "Mobile"],
      ["/works/game", "Game"],
    ],
    produced: [],
    awards: [],
    experiences: [],
  };

  return (
    <div className="primary-nav">
      <h1 className="title">Emman Evangelista</h1>
      <SecondaryNav />
      <nav>
        {primaryLinks.map((link, idx) => (
          <ExpandingLink
            key={`nav-primary-${idx}`}
            path={link[0]}
            left={`0${idx + 1} //`}
            right={link[1]}
          />
        ))}
      </nav>
      <nav>
        {secondaryLinks.works.map((link, idx) => (
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
