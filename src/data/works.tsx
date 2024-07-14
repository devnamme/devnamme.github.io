import { Project } from "../types/project.interface";

export const Labels = {
  website: "Open website",
  github: "View on GitHub",
};

export const WorksData: { [key: string]: Project } = {
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
      "11.png",
    ],
    content: (
      <>
        <p>
          Heavily inspired by{" "}
          <a href="https://timesmachine.nytimes.com/" target="_blank">
            TimesMachine
          </a>{" "}
          of the New York Times, the Digital Archives is the publication's very
          own initiative to digitize and compile all of its published issues
          (since 1929) in a singular website available for everyone. This is
          done in partnership with Ateneo de Manila University's office for
          archival (University Archives), marking history as the publication
          becomes the first student publication in the country with such a
          large-scale initiative.
        </p>
        <p>
          The project was originally proposed in late 2022 with the development
          taking place from May 2024 to mid-June 2024. It was formally launched
          during the publication's 95th anniversary milestone celebration in
          front of alumni and prominent people in the fields of journalism and
          politics.
        </p>
        <p>
          I was the sole proponent and the only developer for the entire
          project. Headless WordPress was used as the primary content management
          system (CMS) and the data was exposed via custom-made REST API
          endpoints. Such endpoints were also created so that parts of the
          Digital Archives can be integrated into other websites or tools of the
          publication. Eventually, these may also be used when the publication's
          future mobile application is launched.
        </p>
      </>
    ),
  },
  "vantage-magazine": {
    title: "Vantage Magazine",
    tech: ["WordPress", "PHP", "HTML", "CSS"],
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
    media: ["thumbnail.png", "01.png", "02.png", "03.png", "04.png", "05.png"],
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
          being retired and a new headless content management system (CMS) being
          created for scalability.
        </p>
      </>
    ),
  },
  "the-guidon": {
    title: "The GUIDON Main",
    tech: ["WordPress", "PHP", "HTML", "CSS"],
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
    media: ["thumbnail.png", "01.png", "02.png", "03.png", "04.png", "05.png"],
    content: (
      <>
        <p>
          A complete redesign of the main website of The GUIDON, the official
          student publication of the Ateneo de Manila University. The website
          was first developed in 2001, undergoing major upgrades and
          redevelopments over the course of 15 years. The previous redesign took
          place during the mid-2010s.
        </p>
        <p>
          Originally, there were plans of migrating the publication's data to
          AWS, detaching the front-end from WordPress, and redeveloping it as a
          NuxtJS project.
        </p>
        <p>
          Eventually, I took over the entire project as the solo developer,
          discarding the existing NuxtJS codebase and rebuilding it as a
          WordPress theme. All in all, the project took 1.5 months to develop as
          I had to learn PHP while building the project.
        </p>
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
    tech: ["WordPress", "PHP", "HTML", "CSS"],
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
    tech: ["Ruby on Rails", "MySQL", "ReactJS", "Tailwind CSS"],
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
  "project-management": {
    title: "Project Management",
    tech: ["Firebase", "Vite", "ReactJS", "TypeScript", "Tailwind CSS"],
    links: [
      {
        text: Labels.website,
        url: "https://project-management-pdf.vercel.app",
      },
    ],
    media: ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png"],
    thumbnail: "01.png",
    content: (
      <>
        <p>Hello world</p>
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

export const WorksDataGroups: {
  web: string[];
  mobile: string[];
  game: string[];
} = {
  web: [
    "the-guidon-archives",
    "vantage-magazine",
    "the-guidon-interactive",
    "the-guidon",
    "talab-2023",
    "epimetrics",
    "dead-end",
    "year-end-gallery-2023",
    "uaap-85-primer-1",
    // "a-house-divided",
    "flood-guard-calbayog",
    "project-management",
  ],
  mobile: [
    // "beadle"
  ],
  game: [
    //
  ],
};
