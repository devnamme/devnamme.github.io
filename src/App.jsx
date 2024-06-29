import "./assets/css/global.css";
import "./assets/css/fonts.css";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import PrimaryNav from "./components/nav/primary";
import SecondaryNav from "./components/nav/secondary";
import { useEffect, useRef, useState } from "react";
import AboutSection from "./sections/about";
import PortfolioSection from "./sections/portfolio";
import ProjectDetails from "./components/project-details";
import { WorksData } from "./data";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={GeneralLayout()} />
      </Routes>
    </>
  );
}

function GeneralLayout() {
  const mainRef = useRef(null);
  const [slug, setSlug] = useState(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  /**
   * Handler for horizontal scrolling
   * @param {Event} event Event object
   */
  const onScroll = (event) => {
    let bcr = document.body.getBoundingClientRect();
    let top = bcr.top;
    let oh = bcr.height - window.innerHeight;
    let perc = (top / oh) * -1;

    mainRef.current.scrollLeft =
      perc * (mainRef.current.scrollWidth - window.innerWidth);
  };

  useEffect(() => {
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    /**
     * Checks if the project slug is valid or not
     */
    if (pathname.startsWith("/project")) {
      let foo = pathname.split("/")[2];
      if (WorksData[foo] != null) setSlug(foo);
      else navigate("/");
    }
  }, [pathname]);

  useEffect(() => {
    /**
     * Disables/enables scrolling depending on slug
     */
    if (slug != null) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [slug]);

  return (
    <>
      <main ref={mainRef}>
        <PrimaryNav />
        <SecondaryNav />

        <AboutSection />
        <PortfolioSection setSlug={setSlug} />

        <ProjectDetails
          setSlug={setSlug}
          slug={slug}
          project={slug == null ? null : WorksData[slug]}
        />
      </main>
    </>
  );
}

export default App;
