import { CdkVirtualScrollViewport, VirtualScrollStrategy } from "@angular/cdk/scrolling";
import { Observable, Subject } from "rxjs";

// @Inject({ providedIn: "root" })
export class CustomVirtualScrollStrategy implements VirtualScrollStrategy {
  private viewport: CdkVirtualScrollViewport;
  public scrolledIndexChange = new Subject<number>();
  private itemHeights: number[] = [];
  // constructor(private itemHeights: number[]) {} // Array of item heights

  attach(viewport: CdkVirtualScrollViewport): void {
    this.viewport = viewport;
    console.log(this.viewport);
  }

  detach(): void {
    this.viewport = undefined;
  }

  onRenderedOffsetChanged() {
    //empty on purpose
  }

  onContentScrolled(): void {
    const scrollTop = this.viewport.measureScrollOffset("top");
    let totalHeight = 0;
    let index = 0;

    for (let i = 0; i < this.itemHeights.length; i++) {
      totalHeight += this.itemHeights[i];

      if (totalHeight > scrollTop) {
        index = i;
        break;
      }
    }

    this.scrolledIndexChange.next(index);
  }

  onDataLengthChanged(): void {
    // Update logic if the data length changes
  }

  onContentRendered(): void {
    // Update logic if the rendered content changes
  }

  scrollToIndex(index: number, behavior: ScrollBehavior): void {
    let scrollTop = 0;

    for (let i = 0; i < index; i++) {
      scrollTop += this.itemHeights[i];
    }

    this.viewport.scrollToOffset(scrollTop, behavior);
  }

  get scrolledIndexChange$(): Observable<number> {
    return this.scrolledIndexChange.asObservable();
  }
}
