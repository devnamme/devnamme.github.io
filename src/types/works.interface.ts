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

export enum WorksDataType {
  web = "web",
  mobile = "mobile",
  game = "game",
}
