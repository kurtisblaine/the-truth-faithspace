export enum Tag {
  //orange
  JesusSuffering = "Jesus Suffering",
  JesusDeity = "Jesus Deity",
  JesusExaltation = "Jesus Exaltation",
  JesusResurrection = "Jesus Resurrection",
  JesusType = "Jesus Type",
  TheSonOfMan = "The Son of Man",
  //yellow
  ImplicitType = "Implicit Type",
  Baptism = "Baptism",
  //green
  Nature = "Nature",
  //purple
  TheNewBirth = "The New Birth",
  //red
  EternalFire = "Eternal Fire",
  //blue
  Faith = "Faith",
  Grace = "Grace",
  Election = "Election",
  //black
  Unfulfilled = "Unfulfilled",
}

export const TagColorMap = new Map<string, Tag[]>([
  [
    "orange-color",
    [Tag.JesusSuffering, Tag.JesusDeity, Tag.JesusExaltation, Tag.JesusResurrection, Tag.JesusType, Tag.TheSonOfMan],
  ],
  ["blue-color", [Tag.Faith, Tag.Grace, Tag.Election]],
  ["green-color", [Tag.Nature]],
  ["purple-color", [Tag.TheNewBirth]],
  ["red-color", [Tag.EternalFire]],
  ["yellow-color", [Tag.ImplicitType, Tag.Baptism]],
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
