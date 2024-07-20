import { ExternalSource } from "./generic.interface";

export interface Article extends ExternalSource {}

export interface Research extends ExternalSource {}

export enum PublishedDataGroup {
  articles = "articles",
  research = "research",
}
