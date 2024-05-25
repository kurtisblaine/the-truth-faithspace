export type Sections = {
  data: Section[];
};

export type Section = {
  id: string;
  bibleId: BibleID;
  bookId: BookID;
  title: string;
  firstVerseId: string;
  lastVerseId: string;
  firstVerseOrgId: string;
  lastVerseOrgId: string;
};

export type BibleID = string;

export type BookID = string;
