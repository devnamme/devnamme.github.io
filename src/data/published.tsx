import {
  Article,
  PublishedDataGroup,
  Research,
} from "../types/published.interface";

export const PublishedDataGroups: {
  [key in PublishedDataGroup]: string[];
} = {
  articles: [
    "au-revoir",
    "rags-outnumbered-by-riches",
    "honey-weve-run-out-of-wicks",
  ],
  research: [
    "bone-metastasis",
    //
  ],
};

export const PublishedData: {
  articles: {
    [key: string]: Article;
  };
  research: {
    [key: string]: Research;
  };
} = {
  articles: {
    "au-revoir": {
      title: "Au revoir",
      url: "https://theguidon.com/2024/04/au-revoir/",
    },
    "honey-weve-run-out-of-wicks": {
      title: "Honey, we’ve run out of wicks",
      url: "https://theguidon.com/2023/02/honey-weve-run-out-of-wicks/",
    },
    "rags-outnumbered-by-riches": {
      title: "Rags outnumbered by riches",
      url: "https://theguidon.com/2023/11/rags-outnumbered-by-riches/",
    },
  },
  research: {
    "bone-metastasis": {
      title:
        "Detection of Osseous Metastasis from Bone Scintigrams using a Combined Global and Local Patch-Based Deep Learning Model",
      coauthors: [
        "Swailem Neil Angelo G. Lumba",
        "Kyla Sydney L. Martin",
        "Patricia Angela R. Abu, PhD",
        "Raphael B. Alampay, PhD",
      ],
    },
  },
};
