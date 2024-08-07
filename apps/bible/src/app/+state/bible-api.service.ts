import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, of } from "rxjs";
import { Bibles } from "../models/bibles";
import { BibleID, Books } from "../models/books";
import { BookID, Chapters } from "../models/chapters";
import { Scripture } from "../models/scripture";
import { Search } from "../models/search";
import { Sections } from "../models/sections";
import { Verses } from "../models/verses";

@Injectable({
  providedIn: "root",
})
export class BibleApiService {
  private api = "https://api.scripture.api.bible/v1/";
  private headers = new HttpHeaders().set("Api-Key", "22934c40a8edbc1aab8fa5bcdc7599b0");
  constructor(private http: HttpClient) {}

  public getBibles() {
    return this.http.get(this.api + "bibles", { headers: this.headers }).pipe(
      map((response: Bibles) => {
        return response;
      })
    );
  }
  public getBooks(bibleId: BibleID) {
    return this.http.get(this.api + "bibles/" + bibleId + "/books", { headers: this.headers }).pipe(
      map((response: Books) => {
        return response;
      })
    );
  }
  public getChapters(bibleId: BibleID, bookId: BookID) {
    return this.http
      .get(this.api + "bibles/" + bibleId + "/books/" + bookId + "/chapters", {
        headers: this.headers,
      })
      .pipe(
        map((response: Chapters) => {
          return response;
        })
      );
  }
  public getSections(bibleId: BibleID, bookId: BookID) {
    return this.http
      .get(this.api + "bibles/" + bibleId + "/books/" + bookId + "/sections", {
        headers: this.headers,
      })
      .pipe(
        map((response: Sections) => {
          return response;
        })
      );
  }
  public getScripture(bibleId: BibleID, chapter: string) {
    if (chapter == "all") return of({} as Scripture);
    return this.http
      .get(
        this.api +
          "bibles/" +
          bibleId +
          "/chapters/" +
          chapter +
          "?include-chapter-numbers=false&include-titles=false&include-verse-numbers=false&content-type=html",
        {
          headers: this.headers,
        }
      )
      .pipe(
        map((response: Scripture) => {
          return response;
        })
      );
  }
  public getVerses(bibleId: BibleID, chapter: string) {
    return this.http
      .get(this.api + "bibles/" + bibleId + "/chapters/" + chapter + "/verses", { headers: this.headers })
      .pipe(
        map((response: Verses) => {
          return response;
        })
      );
  }
  public getVerse(bibleId: BibleID, chapter: string, verse: string) {
    return this.http
      .get(
        this.api +
          "bibles/" +
          bibleId +
          "/chapters/" +
          chapter +
          "/verses/" +
          verse +
          "?include-chapter-numbers=false&include-verse-numbers=false&content-type=html",
        { headers: this.headers }
      )
      .pipe(
        map((response: Verses) => {
          return response;
        })
      );
  }
  public search(bibleId: BibleID, searchText: string) {
    return this.http
      .get(this.api + "bibles/" + bibleId + "search?query=" + searchText + "&offset=0", { headers: this.headers })
      .pipe(
        map((response: Search) => {
          return response;
        })
      );
  }
}
