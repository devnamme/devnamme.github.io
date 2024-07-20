export interface Experience {
  position: string;
  company: string;
  company_url?: string;
  duration: {
    from: string;
    to?: string;
  };
  desc?: string;
}
