export type Chapters = {
  data: Chapter[];
};

export type Chapter = {
  id: string;
  bibleId: BibleID;
  bookId: BookID;
  number: string;
  reference: string;
};

export type BibleID = string;

export type BookID = string;
