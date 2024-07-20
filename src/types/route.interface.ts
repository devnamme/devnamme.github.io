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
    published: {
      active: boolean;
      routes: {
        articles: RouteStateRoute;
        research: RouteStateRoute;
      };
    };
    awards: RouteStateRoute;
    experiences: RouteStateRoute;
    produced: {
      active: boolean;
      routes: {
        videos: RouteStateRoute;
        issues: RouteStateRoute;
      };
    };
  };
}
