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
}

export const itemsRows: ItemEntity[] = [
  { title: "Mark 1:2", description: "testing", prophesy: "", fulfillments: [], tags: [Tag.ChristResurrection] },
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
  { book: "Genesis", range: "1446-1406 BC" },
  { book: "Exodus", range: "1446-1406 BC" },
  { book: "Leviticus", range: "1446-1406 BC" },
  { book: "Numbers", range: "1446-1406 BC" },
  { book: "Deuteronomy", range: "1446-1406 BC" },
  //Historical Books
  { book: "Joshua", range: "1400-1370 BC" },
  { book: "Judges", range: "1045-1000 BC" },
  { book: "Ruth", range: "1011-931 BC" },
  { book: "1 Samuel", range: "930-722 BC" },
  { book: "2 Samuel", range: "930-722 BC" },
  { book: "1 Kings", range: "560-540 BC" },
  { book: "2 Kings", range: "560-540 BC" },
  { book: "1 Chronicles", range: "450-425 BC" },
  { book: "2 Chronicles", range: "450-425 BC" },
  { book: "Ezra", range: "440-430 BC" },
  { book: "Nehemiah", range: "430-400 BC" },
  { book: "Esther", range: "400 BC" },
  //Wisdom
  { book: "Job", range: "second millennium to fifth centruy BC" },
  { book: "Psalms", range: "400 BC" },
  { book: "Proverbs", range: "400 BC" },
  { book: "Ecclesiastes", range: "400 BC" },
  { book: "Song of Solomon", range: "400 BC" },
  //Prophets
  { book: "Isaiah", range: "400 BC" },
  { book: "Jeremiah", range: "400 BC" },
  { book: "Lamentations", range: "400 BC" },
  { book: "Ezekiel", range: "400 BC" },
  { book: "Daniel", range: "400 BC" },
  { book: "Hosea", range: "400 BC" },
  { book: "Joel", range: "400 BC" },
  { book: "Amos", range: "400 BC" },
  { book: "Obadiah", range: "400 BC" },
  { book: "Jonah", range: "400 BC" },
  { book: "Micah", range: "400 BC" },
  { book: "Nahum", range: "400 BC" },
  { book: "Habakkuk", range: "400 BC" },
  { book: "Zephaniah", range: "400 BC" },
  { book: "Haggai", range: "400 BC" },
  { book: "Zechariah", range: "400 BC" },
  { book: "Malachi", range: "400 BC" },
];
