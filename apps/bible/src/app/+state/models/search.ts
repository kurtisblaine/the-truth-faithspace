import { Verse } from "./verses";

export type Search = {
  data: Data;
  meta: Meta;
};

export type Data = {
  query: string;
  limit: number;
  offset: number;
  total: number;
  verseCount: number;
  verses: SearchVerse[];
};

export type SearchVerse = Verse & {
  text: string;
};

export type BibleID = string;

export type BookID = string;

export type Meta = {
  fums: string;
  fumsId: string;
  fumsJsInclude: string;
  fumsJs: string;
  fumsNoScript: string;
};
