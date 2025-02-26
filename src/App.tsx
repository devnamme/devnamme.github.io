import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./assets/css/fonts.css";
import "./assets/css/global.css";
import Gallery from "./components/gallery/gallery";
import PrimaryNav from "./components/nav/primary/primary-nav";
import SecondaryNav from "./components/nav/secondary/secondary-nav";
import ProjectDetails from "./components/project-details/project-details";
import { NavList } from "./data/routes";
import { WorksData } from "./data/works";
import AboutSection from "./sections/about/about";
import { RouteState } from "./types/route.interface";
import { CenterOnElement, FindByPathAndScrollTo } from "./utils/scroll";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={GeneralLayout()} />
      </Routes>
    </>
  );
}

const DEFAULT_ROUTE_STATE: RouteState = {
  primary: "about",
  secondary: "",
  routes: {
    about: { active: true },
    works: {
      active: false,
      routes: {
        web: { active: false },
        mobile: { active: false },
        game: { active: false },
      },
    },
    published: {
      active: false,
      routes: {
        articles: { active: false },
        research: { active: false },
      },
    },
    produced: {
      active: false,
      routes: {
        videos: { active: false },
        issues: { active: false },
      },
    },
    awards: {
      active: false,
    },
    experiences: {
      active: false,
    },
  },
};

function GeneralLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [routeState, setRouteState] = useState<RouteState>({
    ...DEFAULT_ROUTE_STATE,
  });

  const mainRef = useRef<HTMLElement>(null);
  const [slug, setSlug] = useState<string | null>(null);

  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  const onWindowScroll: EventListener = (event: Event) => {
    let bcr = document.body.getBoundingClientRect();
    let perc = (bcr.top / (bcr.height - window.innerHeight)) * -1;

    if (mainRef.current != null) {
      mainRef.current.scrollLeft =
        perc * (mainRef.current.scrollWidth - window.innerWidth);
    }
  };

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const info: { path: string; slugs: string[] } =
          NavList[entry.target.id];
        if (info !== undefined) {
          navigate(info.path);

          const nrs = { ...routeState };
          nrs.primary = NavList[entry.target.id].slugs[0];
          nrs.secondary =
            NavList[entry.target.id].slugs[1] === undefined
              ? ""
              : NavList[entry.target.id].slugs[1];

          Object.keys(nrs.routes).forEach((primary: string) => {
            nrs.routes[primary].active = false;

            if (nrs.routes[primary].routes !== undefined) {
              Object.keys(nrs.routes[primary].routes).forEach(
                (secondary: string) => {
                  nrs.routes[primary].routes![secondary].active = false;
                }
              );
            }
          });

          if (info.slugs.length >= 1) nrs.routes[info.slugs[0]].active = true;
          if (info.slugs.length >= 2)
            nrs.routes[info.slugs[0]].routes![info.slugs[1]].active = true;

          setRouteState(nrs);
        }
      }
    });
  };

  useEffect(() => {
    if (pathname.startsWith("/project")) {
      const projectSlug = pathname.split("/")[2];
      if (WorksData[projectSlug] != null) setSlug(projectSlug);
      navigate("/");
    } else {
      let found = false;
      Object.keys(NavList).forEach((key: string) => {
        if (NavList[key].path === pathname) {
          found = true;
          FindByPathAndScrollTo(pathname);
        }
      });

      if (!found) navigate("/");
    }

    let nob = new IntersectionObserver(observerCallback, {
      rootMargin: "-50%",
    });
    Object.keys(NavList).forEach((id: string) => {
      let el = document.getElementById(id);
      if (el != null) nob.observe(el as HTMLElement);
    });

    setObserver(nob);

    window.removeEventListener("scroll", onWindowScroll);
    window.addEventListener("scroll", onWindowScroll);

    return () => window.removeEventListener("scroll", onWindowScroll);
  }, []);

  useEffect(() => {
    if (slug != null) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    const thumbnail = document.getElementById(slug!);
    if (thumbnail != null && mainRef.current != null) {
      CenterOnElement(thumbnail, mainRef.current);
    }
  }, [slug]);

  return (
    <>
      <main id="main" ref={mainRef}>
        <p
          className={`intro-instruction ${
            routeState.routes.about.active ? "" : "hide"
          }`}
        >
          Scroll down to view projects
        </p>

        <div
          className={`main-title-container ${
            routeState.routes.about.active ? "hide" : ""
          }`}
        >
          <p className="subtitle">Software developer</p>
          <h1 className="title">Emman Evangelista</h1>
        </div>

        <PrimaryNav routeState={routeState} setRouteState={setRouteState} />
        <SecondaryNav />

        <AboutSection />
        <Gallery setSlug={setSlug} />

        <ProjectDetails
          project={slug == null ? null : WorksData[slug]}
          slug={slug}
          closeDetails={() => {
            setSlug(null);
          }}
        />
      </main>
    </>
  );
}
