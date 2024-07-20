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
  published: {
    slug: "published",
    text: "Published",
    routes: {
      articles: {
        slug: "articles",
        text: "Articles",
      },
      research: {
        slug: "research",
        text: "Research",
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
  produced: {
    slug: "produced",
    text: "Produced",
    routes: {
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

  published: {
    path: "/published",
    targetCenterFirst: "articles",
    slugs: ["published"],
  },
  articles: {
    path: "/published/articles",
    slugs: ["published", "articles"],
  },
  research: {
    path: "/published/research",
    slugs: ["published", "research"],
  },

  awards: { path: "/awards", slugs: ["awards"] },

  experiences: { path: "/experiences", slugs: ["experiences"] },

  produced: {
    path: "/produced",
    targetCenterFirst: "videos",
    slugs: ["produced"],
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
};
