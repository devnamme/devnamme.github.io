import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./assets/css/fonts.css";
import "./assets/css/global.css";
import PrimaryNav from "./components/nav/primary";
import SecondaryNav from "./components/nav/secondary";
import ProjectDetails from "./components/project-details";
import { NavList } from "./data/routes";
import { WorksData } from "./data/works";
import AboutSection from "./sections/about";
import WorksSection from "./sections/works";

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
  const mainRef = useRef<HTMLElement>(null);
  const [slug, setSlug] = useState<string | null>(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  /**
   * Handler for horizontal scrolling
   * @param {Event} event Event object
   */
  const onWindowScroll = (event: Event) => {
    let bcr = document.body.getBoundingClientRect();
    let perc = (bcr.top / (bcr.height - window.innerHeight)) * -1;

    if (mainRef.current != null) {
      mainRef.current.scrollLeft =
        perc * (mainRef.current.scrollWidth - window.innerWidth);
    }
  };

  const urlMatches: {
    [key: string]: string;
  } = {
    about: "/",
    web: "/works/web",
    mobile: "/works/mobile",
    game: "/works/game",
  };

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let path: string | null = NavList[entry.target.id];
        if (path != null) navigate(path);
      }
    });
  };

  useEffect(() => {
    if (observer == null) {
      let nob = new IntersectionObserver(observerCallback, {
        rootMargin: "-50%",
      });
      Object.keys(NavList).forEach((id: string) => {
        let el = document.getElementById(id);
        if (el != null) nob.observe(el as HTMLElement);
      });

      setObserver(nob);
    }

    window.removeEventListener("scroll", onWindowScroll);
    window.addEventListener("scroll", onWindowScroll);
    return () => window.removeEventListener("scroll", onWindowScroll);
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

    let thumbnail = document.getElementById(slug as string);
    if (thumbnail != null && mainRef.current != null) {
      let left =
        thumbnail.offsetLeft -
        (window.innerWidth - thumbnail.getBoundingClientRect().width) / 2;

      mainRef.current.scrollTo({
        left: left,
        behavior: "smooth",
      });

      let perc = left / (mainRef.current.scrollWidth - window.innerWidth);

      window.scrollTo({
        top: perc * (document.body.scrollHeight - window.innerHeight),
        behavior: "smooth",
      });
    }
  }, [slug]);

  return (
    <>
      <main ref={mainRef}>
        <PrimaryNav />
        <SecondaryNav />

        <AboutSection />
        <WorksSection setSlug={setSlug} />

        <ProjectDetails
          project={slug == null ? null : WorksData[slug]}
          slug={slug}
          setSlug={setSlug}
        />
      </main>
    </>
  );
}

export default App;
