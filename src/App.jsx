import "./assets/css/global.css";
import "./assets/css/fonts.css";
import { Route, Routes } from "react-router-dom";
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
        {/* <Route path="/" />
          <Route path="/works/:slug?" />
          <Route path="/produced/:slug?" />
          <Route path="/awards" />
          <Route path="/experiences" />
          <Route path="/project/:slug" element={null} />
          <Route path="*" />
        </Route>*/}
      </Routes>
    </>
  );
}

function GeneralLayout() {
  const mainRef = useRef(null);
  const [slug, setSlug] = useState(null);

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
