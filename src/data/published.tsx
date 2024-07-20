import {
  Article,
  PublishedDataGroup,
  Research,
} from "../types/published.interface";

export const PublishedDataGroups: {
  [key in PublishedDataGroup]: string[];
} = {
  articles: [],
  research: [],
  //
};

export const PublishedData: {
  [key: string]: Article | Research;
} = {
  //
};
