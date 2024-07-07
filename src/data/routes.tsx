export interface PrimaryRoute {
  text: string;
  sub?: { [key: string]: SecondaryRoute };
}

export interface SecondaryRoute {
  text: string;
}

export const RouteHierarchy: {
  [key: string]: PrimaryRoute;
} = {
  "": {
    text: "About",
  },
  works: {
    text: "Works",
    sub: {
      web: {
        text: "Web",
      },
      mobile: {
        text: "Mobile",
      },
      game: {
        text: "Game",
      },
    },
  },
  produced: {
    text: "Produced",
    sub: {
      articles: {
        text: "Articles",
      },
      videos: {
        text: "Videos",
      },
      issues: {
        text: "Issues",
      },
    },
  },
  awards: {
    text: "Awards",
  },
  experiences: {
    text: "Experiences",
  },
};

export const NavList: {
  [key: string]: string;
} = {
  about: "/",
  web: "/works/web",
  mobile: "/works/mobile",
  game: "/works/game",
  articles: "/produced/articles",
  videos: "/produced/videos",
  issues: "/produced/issues",
};
