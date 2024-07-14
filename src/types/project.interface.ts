export interface Project {
  title: string;
  tech: string[];
  links: {
    text: string;
    url: string;
  }[];
  media: string[];
  content: JSX.Element;
  thumbnail?: string;
}

export type WorksDataGroup = "web" | "mobile" | "game";
