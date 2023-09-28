export interface Link {
  type: "linkedin" | "external";
  url: string;
}
export interface AuthorType {
  name: string;
  img: string;
  est: string;
  position: string;
  links: Link[];
  url?: string;
}
export interface IArticle {
  content: string[];
  author: AuthorType;
  title: string;
  titleCard: string;
  titleCardProps: "unique" | "normal";
  classParent: string;
  anchor: string;
  icon?: string;
}
