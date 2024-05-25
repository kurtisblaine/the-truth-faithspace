export type Scripture = {
  data: Data;
  meta: Meta;
};

export type Data = {
  id: string;
  bibleId: string;
  number: string;
  bookId: string;
  reference: string;
  copyright: string;
  verseCount: number;
  content: string;
  next: Next;
  previous: Next;
};

export type Next = {
  id: string;
  number: string;
  bookId: string;
};

export type Meta = {
  fums: string;
  fumsId: string;
  fumsJsInclude: string;
  fumsJs: string;
  fumsNoScript: string;
};
