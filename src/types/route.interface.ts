export interface RouteStateRoute {
  active: boolean;
  routes?: {
    [key: string]: RouteStateRoute;
  };
}

export interface RouteState {
  primary: string;
  secondary: string;
  routes: {
    [key: string]: RouteStateRoute;
    about: RouteStateRoute;
    works: {
      active: boolean;
      routes: {
        web: RouteStateRoute;
        mobile: RouteStateRoute;
        game: RouteStateRoute;
      };
    };
    produced: {
      active: boolean;
      routes: {
        articles: RouteStateRoute;
        videos: RouteStateRoute;
        issues: RouteStateRoute;
      };
    };
    awards: RouteStateRoute;
    experiences: RouteStateRoute;
  };
}
