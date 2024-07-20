import { useEffect, useState } from "react";
import { RouteHierarchy, RouteHierarchyRoute } from "../../../data/routes";
import { RouteState } from "../../../types/route.interface";
import ExpandingLink from "../../expanding-link/expanding-link";
import SecondaryNav from "../secondary/secondary-nav";
import "./primary-nav.css";

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
      <nav>
        {Object.keys(RouteHierarchy).map((primary: string, idx: number) => (
          <ExpandingLink
            key={`nav-primary-${idx}`}
            path={`/${
              RouteHierarchy[primary].override !== undefined
                ? RouteHierarchy[primary].override
                : primary
            }`}
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
        {Object.keys(storedPrimaryRoute!.routes || []).map(
          (secondary: string, idx: number) => (
            <ExpandingLink
              key={`nav-secondary-${idx}`}
              path={`/${storedPrimaryRoute!.slug}/${
                storedPrimaryRoute!.routes![secondary].slug
              }`}
              left={`${storedPrimaryRoute!.routes![secondary].text} //`}
              right=""
              active={
                routeState.routes[routeState.primary].routes
                  ? routeState.routes[routeState.primary].routes![secondary]
                    ? routeState.routes[routeState.primary].routes![secondary]
                        .active
                    : false
                  : false
              }
            />
          )
        )}
      </nav>

      <SecondaryNav />
    </div>
  );
}
