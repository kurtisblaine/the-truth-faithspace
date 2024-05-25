export type BibleBooks = {
  data: BibleBook[];
};

export type BibleBook = {
  id: string;
  dblId: string;
  relatedDbl: null | string;
  name: string;
  nameLocal: string;
  abbreviation: string;
  abbreviationLocal: string;
  description: null | string;
  descriptionLocal: null | string;
  language: Language;
  countries: Country[];
  type: Type;
  updatedAt: Date;
  audioBibles: AudioBible[];
};

export type Country = {
  id: string;
  name: string;
  nameLocal: string;
  dblId?: string;
};

export type AudioBible = Country;

export type Language = {
  id: string;
  name: string;
  nameLocal: string;
  script: string;
  scriptDirection: ScriptDirection;
};

export type ScriptDirection = "LTR" | "RTL";

export type Type = "text";
