import { ItemEntity } from "./items/items.reducer";

export enum Tag {
  Baptism = "Baptism",
  ChristSufferings = "Christ's Suffering",
  ChristExaltation = "Christ's Exaltation",
  ChristResurrection = "Christ's Resurrection",
  EternalFire = "Eternal Fire",
  Faith = "Faith",
  Grace = "Grace",
  GodElection = "God's Election",
  Unfulfilled = "Unfulfilled",
  ImplicitType = "ImplicitType",
}

export type TagKey = keyof typeof Tag;

export const itemsRows: ItemEntity[] = [
  {
    title: "2 Kings 13:20 to 21",
    description:
      "Baptism is symbolic of burial. Just as the man who was cast into Elisha's grave, so everyone who is baptised into Christ is also raised up with Him through faith.",
    prophesy: `"Elisha died, and they buried him. Now the bands of the Moabites would invade the land in the spring of the year. As they were burying a man, behold, they saw a marauding band; and they cast the man into the grave of Elisha. And when the man touched the bones of Elisha he revived and stood up on his feet." (2 Kings 13:20 to 21)`,
    fulfillments: [
      `"Therefore we have been buried with Him through baptism into death, so that as Christ was raised from the dead through the glory of the Father, so we too might walk in newness of life." (Romans 6:4)`,
      `"(...) having been buried with Him in baptism, in which you were also raised up with Him through faith in the working of God, who raised Him from the dead." (Colossians 2:12)`,
    ],
    tags: [Tag.ChristResurrection, Tag.ImplicitType],
  },
  {
    title: "bark 1:2",
    description: "testing",
    prophesy: "",
    fulfillments: [],
    tags: [Tag.Baptism, Tag.ChristExaltation],
  },
  {
    title: "tark 1:2",
    description: "testing",
    prophesy: "",
    fulfillments: [],
    tags: [Tag.ChristResurrection, Tag.Faith],
  },
  { title: "Mark 1:2", description: "testing", prophesy: "", fulfillments: [], tags: [Tag.ChristResurrection] },
];

export type BookDateRange = {
  book: string;
  range: string;
};

export const bookDateRanges: BookDateRange[] = [
  //Pentateuch (Torah)
  { book: "Genesis", range: "1446-1406 B.C." },
  { book: "Exodus", range: "1446-1406 B.C." },
  { book: "Leviticus", range: "1446-1406 B.C." },
  { book: "Numbers", range: "1446-1406 B.C." },
  { book: "Deuteronomy", range: "1446-1406 B.C." },
  //Historical Books
  { book: "Joshua", range: "1400-1370 B.C." },
  { book: "Judges", range: "1045-1000 B.C." },
  { book: "Ruth", range: "1011-931 B.C." },
  { book: "1 Samuel", range: "930-722 B.C." },
  { book: "2 Samuel", range: "930-722 B.C." },
  { book: "1 Kings", range: "560-540 B.C." },
  { book: "2 Kings", range: "560-540 B.C." },
  { book: "1 Chronicles", range: "450-425 B.C." },
  { book: "2 Chronicles", range: "450-425 B.C." },
  { book: "Ezra", range: "440-430 B.C." },
  { book: "Nehemiah", range: "430-400 B.C." },
  { book: "Esther", range: "400 B.C." },
  //Wisdom
  { book: "Job", range: "second millennium to fifth centruy B.C." },
  { book: "Psalms", range: "400 B.C." },
  { book: "Proverbs", range: "400 B.C." },
  { book: "Ecclesiastes", range: "400 B.C." },
  { book: "Song of Solomon", range: "400 B.C." },
  //Prophets
  { book: "Isaiah", range: "400 B.C." },
  { book: "Jeremiah", range: "400 B.C." },
  { book: "Lamentations", range: "400 B.C." },
  { book: "Ezekiel", range: "400 B.C." },
  { book: "Daniel", range: "400 B.C." },
  { book: "Hosea", range: "400 B.C." },
  { book: "Joel", range: "400 B.C." },
  { book: "Amos", range: "400 B.C." },
  { book: "Obadiah", range: "400 B.C." },
  { book: "Jonah", range: "400 B.C." },
  { book: "Micah", range: "400 B.C." },
  { book: "Nahum", range: "400 B.C." },
  { book: "Habakkuk", range: "400 B.C." },
  { book: "Zephaniah", range: "400 B.C." },
  { book: "Haggai", range: "400 B.C." },
  { book: "Zechariah", range: "400 B.C." },
  { book: "Malachi", range: "400 B.C." },
];
