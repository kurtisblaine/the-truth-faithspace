import { isPlatformServer } from "@angular/common";
import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, Output, PLATFORM_ID } from "@angular/core";
import { fromEvent, Observable, throttleTime } from "rxjs";

@Directive({
  selector: "[elementInViewport]",
})
export class ElementInViewportDirective implements AfterViewInit {
  private element: HTMLElement;

  @Output() public inViewport = new EventEmitter<boolean>();

  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: object) {
    this.element = this.el.nativeElement;
  }

  ngAfterViewInit() {
    if (isPlatformServer(this.platformId)) return;

    const scroll$: Observable<Event> = fromEvent(window, "scroll").pipe(throttleTime(100));

    scroll$.subscribe((event) => {
      const rect = this.element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        this.inViewport.emit(true);
      }
    });
  }
}
