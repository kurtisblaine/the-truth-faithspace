import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, forkJoin, map, Observable, of, Subscription } from "rxjs";
import { BibleApiService } from "../+state/bible-api.service";
import { Data } from "../models/scripture";

export class MyDataSource extends DataSource<string | undefined> {
  private _pageSize = 1;
  private _cachedData: Map<number, Data> = new Map<number, Data>();
  private _fetchedPages = new Set<number>();
  private readonly _dataStream = new BehaviorSubject<(string | undefined)[]>([]);
  private readonly _subscription = new Subscription();

  constructor(
    private bibleApi: BibleApiService,
    private bibleId: string,
    private bookId: string,
    private totalChapters: number
  ) {
    super();
    this._cachedData.clear();
  }

  createRange(number, times) {
    return Array.from({ length: times }, (_, i) => number + i);
  }

  fetchData(
    startIndex: number,
    count: number
  ): Observable<{ chapter: number; content: any; refresh: boolean; verseCount: number }[]> {
    const sources = this.createRange(startIndex, count)
      .filter((r) => r < this.totalChapters)
      .map((position) => {
        const index = position === 0 ? "intro" : position.toString();
        if (this._cachedData.has(index)) {
          const existing = this._cachedData.get(index);
          return of({ chapter: index, content: existing.content, refresh: false, verseCount: existing.verseCount });
        }
        return this.bibleApi.getScripture(this.bibleId, `${this.bookId}.${index}`).pipe(
          map((r) => {
            this._cachedData.set(index, r.data);
            return {
              chapter: index.toUpperCase(),
              content: r.data.content,
              refresh: true,
              verseCount: r.data.verseCount,
            };
          })
        );
      });

    return forkJoin(sources).pipe(map((resArray) => resArray));
  }

  connect(collectionViewer: CollectionViewer): Observable<(string | undefined)[]> {
    this._subscription.add(
      collectionViewer.viewChange.subscribe((range) => {
        console.log(range.start, range.end, range);
        const startPage = this._getPageForIndex(range.start);
        const endPage = this._getPageForIndex(range.end - 1);
        for (let i = startPage; i <= endPage; i++) {
          const index = i === 0 ? "intro" : i.toString();
        }
      })
    );
    return this._dataStream;
  }

  disconnect(): void {
    this._subscription.unsubscribe();
  }

  private _getPageForIndex(index: number): number {
    return Math.floor(index / this._pageSize);
  }
}
