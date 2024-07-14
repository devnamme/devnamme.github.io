import { useEffect, useState } from "react";
import { RouteHierarchy, RouteHierarchyRoute } from "../../../data/routes";
import { RouteState } from "../../../types/route.interface";
import ExpandingLink from "../../expanding-link";
import SecondaryNav from "../secondary";
import "./index.css";

interface Props {
  routeState: RouteState;
  setRouteState: Function;
}

export default function PrimaryNav({ routeState, setRouteState }: Props) {
  const [storedPrimaryRoute, setStoredPrimaryRoute] =
    useState<RouteHierarchyRoute>({
      slug: "",
      text: "",
      routes: {},
    });

  useEffect(() => {
    if (routeState.routes[routeState.primary].routes !== undefined) {
      setStoredPrimaryRoute(RouteHierarchy[routeState.primary]);
    }
  }, [routeState]);

  return (
    <div className="primary-nav">
      <h1 className={`title ${routeState.routes.about.active ? "hide" : ""}`}>
        Emman Evangelista
      </h1>

      <SecondaryNav />

      <nav>
        {Object.keys(RouteHierarchy).map((primary: string, idx: number) => (
          <ExpandingLink
            key={`nav-primary-${idx}`}
            path={`/${primary}`}
            left={`0${idx + 1} //`}
            right={RouteHierarchy[primary].text}
            active={routeState.routes[primary].active}
          />
        ))}
      </nav>

      <nav
        className={
          RouteHierarchy[routeState.primary] !== undefined &&
          RouteHierarchy[routeState.primary].routes === undefined
            ? "hide"
            : ""
        }
      >
        {Object.keys(storedPrimaryRoute!.routes!).map(
          (secondary: string, idx: number) => (
            <ExpandingLink
              key={`nav-secondary-${idx}`}
              path={`/${storedPrimaryRoute!.slug}/${
                storedPrimaryRoute!.routes![secondary].slug
              }`}
              left={`${storedPrimaryRoute!.routes![secondary].text} //`}
              right=""
              active={
                routeState.routes[routeState.primary].routes !== undefined
                  ? routeState.routes[routeState.primary].routes![secondary]
                      .active
                  : false
              }
            />
          )
        )}
      </nav>
    </div>
  );
}
