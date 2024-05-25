export type Books = {
  data: Book[];
};

export type Book = {
  id: string;
  bibleId: BibleID;
  abbreviation: string;
  name: string;
  nameLong: string;
};

export type BibleID = string;
