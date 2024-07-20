export interface Project {
  title: string;
  tech: string[];
  links?: {
    text: string;
    url: string;
  }[];
  media: string[];
  thumbnail?: string;
  thumbnailStyles?: React.CSSProperties;
  content: JSX.Element;
}

export type WorksDataGroup = "web" | "mobile" | "game";
