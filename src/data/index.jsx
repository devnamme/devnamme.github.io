export const Labels = {
  website: "Open website",
  github: "View on GitHub",
};

export const WorksData = {
  "the-guidon-archives": {
    title: "The GUIDON Archives",
    links: [
      {
        text: Labels.website,
        url: "https://archives.theguidon.com",
      },
      {
        text: Labels.github,
        url: "https://github.com/theguidon/theguidon-archives",
      },
    ],
    tech: ["Headless WordPress", "ReactJS"],
    content: "",
    media: ["thumbnail.png", "01.png"],
  },
  "vantage-magazine": {
    title: "Vantage Magazine",
    media: ["thumbnail.png"],
  },
  "the-guidon": {
    title: "The GUIDON Main",
    media: ["thumbnail.png"],
  },
};

export const WorksDataGroups = {
  web: ["the-guidon-archives", "vantage-magazine", "the-guidon"],
  mobile: [],
  game: [],
};

export const ProducerData = {
  articles: [],
  videos: [],
  issues: [],
};

export const AwardsData = [
  {
    title: "Google Developer Student Clubs Hackfest 2023",
    website: "https://www.gdscloyola.org/",
    team: "5kea",
    position: "1st place",
  },
];

export const ExperienceData = [
  {
    title: "Web Developer Intern",
    company: "Azeus Systems Philippine Limited",
    company_website: "https://azeus.com",
    date: "June 2023 to August 2023",
    desc: "Created a demo framework for clients that enables them to track their ESG.",
  },
  {
    title: "Design Executive Editor",
    company: "The GUIDON",
    company_website: "https://theguidon.com",
    date: "June 2023 to June 2024",
    desc: "The Design Executive oversees the entire Design Cluster and Multimedia arm of the publication: from branding, to broadsheet issues, videos, photos, websites, and illustrations.",
  },
];
