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
