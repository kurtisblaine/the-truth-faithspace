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
  ["black-color", "Prophecy Types"],
  ["orange-color", "Jesus Types"],
  ["green-color", "None"],
  ["pink-color", "Salvation Types"],
  ["purple-color", "None"],
  ["red-color", "None"],
  ["yellow-color", "None"],
  ["light-green-color", "None"],
  ["cyan-color", "None"],
  ["blue-color", "Grace Types"],
]);

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
