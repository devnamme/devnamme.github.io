export interface Article {
  title: string;
  url: string;
  thumbnail?: string;
}

export interface Research {
  title: string;
  coauthors: string[];
}

export enum PublishedDataGroup {
  articles = "articles",
  research = "research",
}
