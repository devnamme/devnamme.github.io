import { Project } from "../types/project.interface";

export const Labels = {
  website: "Open website",
  github: "View on GitHub",
  facebook: "View Facebook page",
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
    media: ["01.png", "02.png", "03.png", "04.png"],
    thumbnail: "01.png",
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
        <p>
          Every year, Ateneo de Manila University holds Talakayang Alay sa Bayan
          (TALAB)—a series of talks, workshops, and events that are tailored fit
          for the student community.
        </p>
        <p>
          As every event can only have a limited number of slots, an enlistment
          system similar to the university's regular class enlistment system is
          being implemented this year.
        </p>
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
      {
        text: Labels.facebook,
        url: "https://www.facebook.com/epimetricsph/",
      },
    ],
    media: ["thumbnail.png"],
    content: (
      <>
        <p>
          EpiMetrics, Inc. is a local health research institute in the
          Philippines partnering with numerous local non-governmental
          organizations (NGOs), national government agencies, and international
          institutions.
        </p>
        <p>
          A user-friendly content management system has been requested in order
          for the organization to regularly update the content on their website.
        </p>
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
        <p>
          As the academic year of 2023–2024 comes to an end, the publication
          revisits various events experienced by the Ateneo community following
          the return of regular onsite classes post-lockdown.
        </p>
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
    media: [
      "thumbnail.png",
      "01.png",
      "02.png",
      "03.png",
      "04.png",
      "05.png",
      "06.png",
    ],
    content: (
      <>
        <p>
          Dead End: The Commuter Experience is an interactive article that
          features the hardships of Filipino commuters in an attempt to uncover
          issues both in the local and the national scale.
        </p>
      </>
    ),
  },
  "uaap-85-digital-primer": {
    title: "UAAP Season 85 Digital Primer",
    tech: ["WordPress", "PHP", "HTML", "CSS"],
    links: [
      {
        text: "View Volume 1",
        url: "https://theguidon.com/uaap-85-primer-volume-1/",
      },
      {
        text: "View Volume 2",
        url: "https://theguidon.com/uaap-85-primer-volume-2/",
      },
    ],
    media: ["01.png", "02.png", "03.png", "04.png"],
    thumbnail: "01.png",
    content: (
      <>
        <p>Hello world</p>
      </>
    ),
  },
  // "a-house-divided": {
  //   title: "A House Divided",
  //   tech: ["VueJS"],
  //   links: [
  //     {
  //       text: Labels.website,
  //       url: "https://interactive.theguidon.com/2022/10/a-house-divided/",
  //     },
  //     {
  //       text: Labels.github,
  //       url: "https://github.com/theguidon/a-house-divided",
  //     },
  //   ],
  //   media: ["thumbnail.png"],
  //   content: (
  //     <>
  //       <p>Hello world</p>
  //     </>
  //   ),
  // },
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
  // beadle: {
  //   title: "Beadle: AdMU Student App",
  //   tech: ["Flutter", "Dart"],
  //   links: [],
  //   media: ["thumbnail.png"],
  //   content: (
  //     <>
  //       <p>Hello world</p>
  //     </>
  //   ),
  // },
  "ma10mon-cs": {
    title: "Ma10mon: CS",
    tech: ["HTML", "JavaScript"],
    links: [
      {
        text: Labels.website,
        url: "https://emmanevangelista.com/math-10-integrating-project/",
      },
      {
        text: Labels.github,
        url: "https://github.com/dnamme/math-10-integrating-project",
      },
    ],
    media: ["thumbnail.jpg"],
    thumbnail: "thumbnail.jpg",
    content: (
      <>
        <p>
          Set in an alternate universe, three daring students attempt to defeat
          an evil being.
        </p>
        <p>
          Ma10mon: CS was originally submitted as an academic requirement. The
          game was built using HTML5's canvas, with every element being drawn by
          one of my groupmates.
        </p>
        <p>
          An extensive amount of JavaScript knowledge was required in order to
          figure out which scenes and which frames to draw.
        </p>
      </>
    ),
  },
  "race-to-twelve": {
    title: "Race to Twelve",
    tech: ["C++", "OpenGL"],
    links: [
      {
        text: Labels.github,
        url: "https://github.com/dnamme/race-to-twelve",
      },
    ],
    media: ["thumbnail.png"],
    content: (
      <>
        <p>
          The player and the game AI each take turns stacking numbers from 1 to
          3. The first one to get a total of 12 blocks wins the round.
        </p>
        <p>
          Race to Twelve was originally submitted as an academic requirement for
          one of my Senior High School classes for learning C++. OpenGL was used
          in order to efficiently draw each frame.
        </p>
      </>
    ),
  },
  slimed: {
    title: "Slime'd",
    tech: ["Arduino", "C++"],
    links: [],
    media: ["thumbnail.jpg"],
    thumbnail: "thumbnail.jpg",
    content: (
      <>
        <p>
          As a gravity-defying slimeball, the player must try to survive for as
          long as they can while avoiding spikes.
        </p>
      </>
    ),
  },

  "skiulas-chamber": {
    title: "Skiula's Chamber",
    tech: ["Java"],
    links: [],
    media: ["thumbnail.png"],
    content: (
      <>
        <p>Hello world</p>
      </>
    ),
  },
  "fuji-animation": {
    title: "Mt. Fuji Animation",
    tech: ["Java"],
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
    "uaap-85-digital-primer",
    // "a-house-divided",
    "flood-guard-calbayog",
    "project-management",
  ],
  mobile: [
    // "beadle"
  ],
  game: [
    "ma10mon-cs",
    "race-to-twelve",
    // "slimed",
    "skiulas-chamber",
    "fuji-animation",
  ],
};
