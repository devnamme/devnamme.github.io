export interface RouteHierarchyRoute {
  slug: string;
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
      // mobile: {
      //   slug: "mobile",
      //   text: "Mobile",
      // },
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
    slugs: string[];
  };
} = {
  about: { path: "/", slugs: ["about"] },
  web: { path: "/works/web", slugs: ["works", "web"] },
  // mobile: { path: "/works/mobile", slugs: ["works", "mobile"] },
  game: { path: "/works/game", slugs: ["works", "game"] },
  articles: { path: "/produced/articles", slugs: ["produced", "articles"] },
  videos: { path: "/produced/videos", slugs: ["produced", "videos"] },
  issues: { path: "/produced/issues", slugs: ["produced", "issues"] },
  awards: { path: "/awards", slugs: ["awards"] },
  experiences: { path: "/experiences", slugs: ["experiences"] },
};
