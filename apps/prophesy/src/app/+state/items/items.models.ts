export enum Tag {
  //orange
  JesusSuffering = "Jesus Suffering",
  JesusDeity = "Jesus Deity",
  JesusExaltation = "Jesus Exaltation",
  JesusResurrection = "Jesus Resurrection",
  JesusType = "Jesus Type",
  TheSonOfMan = "The Son of Man",
  //teal
  Baptism = "Baptism",
  //light green
  Gentiles = "Gentiles",
  //green
  Nature = "Nature",
  //purple
  TheNewBirth = "The New Birth",
  //red
  EternalFire = "Eternal Fire",
  //yellow
  Faith = "Faith",
  //blue
  Grace = "Grace",
  Promise = "Promise",
  Election = "Election",
  //pink
  CallForSalvation = "Call for Salvation",
  EternalLife = "Eternal Life",
  //black
  DirectProphecy = "Direct Prophecy",
  ImplicitType = "Implicit Type",
  Unfulfilled = "Unfulfilled",
}

export const TagColorMap = new Map<string, Tag[]>([
  ["black-color", [Tag.DirectProphecy, Tag.ImplicitType, Tag.Unfulfilled]],
  [
    "orange-color",
    [Tag.JesusSuffering, Tag.JesusDeity, Tag.JesusExaltation, Tag.JesusResurrection, Tag.JesusType, Tag.TheSonOfMan],
  ],
  ["green-color", [Tag.Nature]],
  ["pink-color", [Tag.CallForSalvation, Tag.EternalLife]],
  ["purple-color", [Tag.TheNewBirth]],
  ["red-color", [Tag.EternalFire]],
  ["yellow-color", [Tag.Faith]],
  ["light-green-color", [Tag.Gentiles]],
  ["cyan-color", [Tag.Baptism]],
  ["blue-color", [Tag.Grace, Tag.Election, Tag.Promise]],
]);

export const TagColorNameMap = new Map<string, string>([
  ["black-color", "*Prophecy Types"],
  ["orange-color", "*Jesus Types"],
  ["green-color", "Nature"],
  ["pink-color", "*Salvation Types"],
  ["purple-color", "The New Birth"],
  ["red-color", "Eternal Fire"],
  ["yellow-color", "Faith"],
  ["light-green-color", "Gentiles"],
  ["cyan-color", "Baptism"],
  ["blue-color", "*Grace Types"],
]);

export const bookDateRanges: BookDateRange[] = [
  //Pentateuch (Torah)
  { book: "Genesis", range: "1446-1406 B.C." },
  { book: "Exodus", range: "1446-1406 B.C." },
  { book: "Leviticus", range: "1446-1406 B.C." },
  { book: "Numbers", range: "1446-1406 B.C." },
  { book: "Deuteronomy", range: "1446-1406 B.C." },
  //Historical Books
  { book: "Joshua", range: "1405-1385 B.C." },
  { book: "Judges", range: "1100-1043 B.C." },
  { book: "Ruth", range: "1100-1010 B.C." },
  { book: "1 Samuel", range: "1040-930 B.C." },
  { book: "2 Samuel", range: "1040-930 B.C." },
  { book: "1 Kings", range: "580-538 B.C." },
  { book: "2 Kings", range: "580-538 B.C." },
  { book: "1 Chronicles", range: "450-425 B.C." },
  { book: "2 Chronicles", range: "450-425 B.C." },
  { book: "Ezra", range: "460-444 B.C." },
  { book: "Nehemiah", range: "445-432 B.C." },
  { book: "Esther", range: "483-450 B.C." },
  //Wisdom
  { book: "Job", range: "2000-1800 B.C." },
  { book: "Psalms", range: "1440-450 B.C." },
  { book: "Proverbs", range: "950-700 B.C." },
  { book: "Ecclesiastes", range: "936-925 B.C." },
  { book: "Song of Solomon", range: "971-950 B.C." },
  //Prophets
  { book: "Isaiah", range: "740-680 B.C." },
  { book: "Jeremiah", range: "627-570 B.C." },
  { book: "Lamentations", range: "586 B.C." },
  { book: "Ezekiel", range: "593-570 B.C." },
  { book: "Daniel", range: "538-530 B.C." },
  { book: "Hosea", range: "750-710 B.C." },
  { book: "Joel", range: "835-796 B.C." },
  { book: "Amos", range: "760-750 B.C." },
  { book: "Obadiah", range: "1040-930 B.C." },
  { book: "Jonah", range: "785-760 B.C." },
  { book: "Micah", range: "742-687 B.C." },
  { book: "Nahum", range: "663-612 B.C." },
  { book: "Habakkuk", range: "615-588 B.C." },
  { book: "Zephaniah", range: "640-621 B.C." },
  { book: "Haggai", range: "520 B.C." },
  { book: "Zechariah", range: "520-470 B.C." },
  { book: "Malachi", range: "450-424 B.C." },
];

export const getTagColorClass = (tag: Tag) => {
  let colorClass = "";
  for (const [key, tags] of TagColorMap.entries()) {
    if (tags.some((t) => t === tag)) {
      colorClass = key;
      break;
    }
  }

  return colorClass;
};

export type TagKey = keyof typeof Tag;

export type BookDateRange = {
  book: string;
  range: string;
};
