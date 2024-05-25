export type Verses = {
  data: Verse[];
};

export type Verse = {
  id: string;
  orgId: string;
  bookId: BookID;
  chapterId: ChapterID;
  bibleId: BibleID;
  reference: string;
};

export type BibleID = string;

export type BookID = string;

export type ChapterID = string;
