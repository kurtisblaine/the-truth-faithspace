export enum Tag {
  JesusSuffering = "Jesus Suffering",
  JesusDeity = "Jesus Deity",
  JesusExaltation = "Jesus Exaltation",
  JesusResurrection = "Jesus Resurrection",
  JesusType = "Jesus Type",
  ImplicitType = "Implicit Type",
  Baptism = "Baptism",
  Nature = "Nature",
  TheSonOfMan = "The Son of Man",
  TheNewBirth = "The New Birth",
  EternalFire = "Eternal Fire",
  Faith = "Faith",
  Grace = "Grace",
  Election = "Election",
  Unfulfilled = "Unfulfilled",
}

export type TagKey = keyof typeof Tag;

export type BookDateRange = {
  book: string;
  range: string;
};
