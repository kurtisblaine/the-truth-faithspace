export interface InsightEntity {
  collectionId?: string;
  id: string | number; // Primary ID
  json: string | object;
  title: string;
  date: string;
}
