export interface BlogEntity {
  collectionId?: string;
  id: string | number; // Primary ID
  json: object;
  title: string;
  date: string;
}
