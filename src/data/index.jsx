export const Labels = {
  website: "Open website",
  github: "View on GitHub",
};

export const WorksData = {
  "the-guidon-archives": {
    title: "The GUIDON Archives",
    tech: ["Headless WordPress", "PHP", "Vite", "ReactJS"],
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
    media: [
      "thumbnail.png",
      "01.png",
      "02.png",
      "03.png",
      "04.png",
      "05.png",
      "06.png",
      "07.png",
      "08.png",
      "09.png",
      "10.png",
    ],
    content: (
      <>
        <p>
          Heavily inspired by{" "}
          <a href="https://timesmachine.nytimes.com/" target="_blank">
            TimesMachine
          </a>{" "}
          by New York Times, The Digital Archives is the publication's very own
          initiative to digitize and compile all of its published issues (since
          1929) in a singular website available for everyone. This is done in
          partnership with Ateneo's office for archival (University Archives)
          and marks history for the publication as the first student publication
          in the country with a large-scale initiative.
        </p>
        <p>
          As the original proponent, project manager, and sole developer for the
          Digital Archives, I formally launched the Digital Archives in the
          publication's 95th anniversary celebration in front of notable alumni
          and prominent people in the field of journalism and politics.
        </p>
      </>
    ),
  },
  "vantage-magazine": {
    title: "Vantage Magazine",
    tech: ["WordPress", "PHP"],
    links: [
      {
        text: Labels.website,
        url: "https://vantage.theguidon.com",
      },
      {
        text: Labels.github,
        url: "https://github.com/theguidon/vantmag-revamp-2022",
      },
    ],
    media: ["thumbnail.png"],
    content: (
      <>
        <p>
          A complete redesign of the Vantage Magazine website in time for its
          10th year anniversary in June 2024. The entire website was developed
          in less than 1 week.
        </p>
      </>
    ),
  },
  "the-guidon-interactive": {
    title: "The GUIDON Interactive",
    tech: ["Headless WordPress", "PHP", "Vite", "ReactJS"],
    links: [
      {
        text: Labels.website,
        url: "https://interactive.theguidon.com",
      },
    ],
    media: ["thumbnail.png"],
    content: (
      <>
        <p>
          A complete redesign of The GUIDON Interactive, the homepage of all
          interactive and immersive articles of the publication. The launch of
          the newly developed website prompted the reform of internal processes,
          with the usage of Google Sheets as the primary makeshift database
          being retired and a new Headless CMS being created for scalability.
        </p>
      </>
    ),
  },
  "the-guidon": {
    title: "The GUIDON Main",
    tech: ["WordPress", "PHP"],
    links: [
      {
        text: Labels.website,
        url: "https://theguidon.com",
      },
      {
        text: Labels.github,
        url: "https://github.com/theguidon/gdn-main-2022",
      },
    ],
    media: ["thumbnail.png"],
    content: (
      <>
        <p>A complete redesign of the main website of The GUIDON.</p>
      </>
    ),
  },
  "talab-2023": {
    title: "TALAB 2023",
    tech: ["Django", "HTML", "CSS"],
    links: [],
    media: ["thumbnail.png"],
    content: (
      <>
        <p>Hello world</p>
      </>
    ),
  },
  epimetrics: {
    title: "EpiMetrics, Inc.",
    tech: ["WordPress", "PHP"],
    links: [
      {
        text: Labels.website,
        url: "https://epimetrics.com.ph",
      },
    ],
    media: ["thumbnail.png"],
    content: (
      <>
        <p>Hello world</p>
      </>
    ),
  },
  "year-end-gallery-2023": {
    title: "Year-End Gallery 2023",
    tech: ["ReactJS"],
    links: [
      {
        text: Labels.website,
        url: "https://interactive.theguidon.com/2023/05/year-end-gallery/",
      },
      {
        text: Labels.github,
        url: "https://github.com/theguidon/year-end-gallery-2023",
      },
    ],
    media: ["thumbnail.png"],
    content: (
      <>
        <p>Hello world</p>
      </>
    ),
  },
  "dead-end": {
    title: "Dead End: The Commuter Experience",
    tech: ["ReactJS"],
    links: [
      {
        text: Labels.website,
        url: "https://interactive.theguidon.com/2023/05/dead-end/",
      },
      {
        text: Labels.github,
        url: "https://github.com/theguidon/dead-end-2023",
      },
    ],
    media: ["thumbnail.png"],
    content: (
      <>
        <p>
          Dead End is an interactive article that features the hardships of
          Filipino commuters in their day to day lives.
        </p>
      </>
    ),
  },
  "uaap-85-primer-1": {
    title: "UAAP Season 85 Primer Volume 1",
    tech: ["WordPress", "PHP", "HTML", "CSS"],
    links: [
      {
        text: Labels.website,
        url: "https://theguidon.com/uaap-85-primer-volume-1/",
      },
    ],
    media: ["thumbnail.png"],
    content: (
      <>
        <p>Hello world</p>
      </>
    ),
  },
  "a-house-divided": {
    title: "A House Divided",
    tech: ["VueJS"],
    links: [
      {
        text: Labels.website,
        url: "https://interactive.theguidon.com/2022/10/a-house-divided/",
      },
      {
        text: Labels.github,
        url: "https://github.com/theguidon/a-house-divided",
      },
    ],
    media: ["thumbnail.png"],
    content: (
      <>
        <p>Hello world</p>
      </>
    ),
  },
  "flood-guard-calbayog": {
    title: "Flood Guard Calbayog",
    tech: ["Ruby on Rails", "MySQL", "ReactJS"],
    links: [],
    media: ["thumbnail.png"],
    content: (
      <>
        <p>
          A proof-of-concept web application that efficiently calculates
          flooding risks and its related heatmaps for the Local Government Unit
          (LGU) of Calbayog, Samar in the Philippines.
        </p>
      </>
    ),
  },
  beadle: {
    title: "Beadle: AdMU Student App",
    tech: ["Flutter", "Dart"],
    links: [],
    media: ["thumbnail.png"],
    content: (
      <>
        <p>Hello world</p>
      </>
    ),
  },
};

export const WorksDataGroups = {
  web: [
    "the-guidon-archives",
    "vantage-magazine",
    "the-guidon-interactive",
    "the-guidon",
    "talab-2023",
    "epimetrics",
    "year-end-gallery-2023",
    "dead-end",
    "uaap-85-primer-1",
    "a-house-divided",
    "flood-guard-calbayog",
  ],
  mobile: ["beadle"],
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
