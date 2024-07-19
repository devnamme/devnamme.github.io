export interface RouteHierarchyRoute {
  slug: string;
  override?: string;
  text: string;
  routes?: {
    [key: string]: RouteHierarchyRoute;
  };
}

export const RouteHierarchy: {
  [key: string]: RouteHierarchyRoute;
} = {
  about: {
    slug: "",
    override: "",
    text: "About",
  },
  works: {
    slug: "works",
    text: "Works",
    routes: {
      web: {
        slug: "web",
        text: "Web",
      },
      mobile: {
        slug: "mobile",
        text: "Mobile",
      },
      game: {
        slug: "game",
        text: "Game",
      },
    },
  },
  produced: {
    slug: "produced",
    text: "Produced",
    routes: {
      articles: {
        slug: "articles",
        text: "Articles",
      },
      videos: {
        slug: "videos",
        text: "Videos",
      },
      issues: {
        slug: "issues",
        text: "Issues",
      },
    },
  },
  awards: {
    slug: "awards",
    text: "Awards",
  },
  experiences: {
    slug: "experiences",
    text: "Experiences",
  },
};

export const NavList: {
  [key: string]: {
    path: string;
    targetCenterFirst?: string;
    slugs: string[];
  };
} = {
  about: { path: "/", slugs: ["about"] },

  works: { path: "/works", targetCenterFirst: "web", slugs: ["works"] },
  web: {
    path: "/works/web",
    targetCenterFirst: "web",
    slugs: ["works", "web"],
  },
  mobile: {
    path: "/works/mobile",
    targetCenterFirst: "mobile",
    slugs: ["works", "mobile"],
  },
  game: {
    path: "/works/game",
    targetCenterFirst: "game",
    slugs: ["works", "game"],
  },

  produced: {
    path: "/produced",
    targetCenterFirst: "articles",
    slugs: ["produced"],
  },
  articles: {
    path: "/produced/articles",
    targetCenterFirst: "articles",
    slugs: ["produced", "articles"],
  },
  videos: {
    path: "/produced/videos",
    targetCenterFirst: "videos",
    slugs: ["produced", "videos"],
  },
  issues: {
    path: "/produced/issues",
    targetCenterFirst: "issues",
    slugs: ["produced", "issues"],
  },

  awards: { path: "/awards", slugs: ["awards"] },

  experiences: { path: "/experiences", slugs: ["experiences"] },
};
