import { AnimationBuilder, AnimationPlayer, AnimationReferenceMetadata } from "@angular/animations";
import { afterNextRender, Directive, effect, ElementRef, Input, OnDestroy, OnInit, signal } from "@angular/core";
import { distinctUntilChanged, Observable, Subscription } from "rxjs";

@Directive({
  selector: "[libAnimationWatcher]",
  standalone: true,
})
export class AnimationWatcherDirective implements OnInit, OnDestroy {
  @Input("libAnimationWatcher") libAnimationWatcher!: AnimationReferenceMetadata;

  private observer!: IntersectionObserver;
  private animationPlayer!: AnimationPlayer;
  private subscription!: Subscription;

  private isVisible = signal(false);
  private isVisible$ = new Observable<boolean>((subscriber) => {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        subscriber.next(entry.isIntersecting);
      },
      {
        // threshold: 0.2, // Triggers when 20% of the element is visible
      }
    );
    this.observer.observe(this.el.nativeElement);

    return () => this.observer.disconnect();
  }).pipe(distinctUntilChanged());

  constructor(private el: ElementRef, private builder: AnimationBuilder) {
    afterNextRender(() => {
      this.subscription = this.isVisible$.subscribe((isVisible) => {
        this.isVisible.set(isVisible);
      });

      this.observer.observe(this.el.nativeElement);

      if (this.libAnimationWatcher) {
        const animationFactory = this.builder.build(this.libAnimationWatcher);
        this.animationPlayer = animationFactory.create(this.el.nativeElement);
      }
    });

    effect(() => {
      if (this.isVisible() && !this.animationPlayer?.hasStarted()) {
        this.animationPlayer?.play();
      } else {
        this.animationPlayer?.reset();
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }

    if (this.animationPlayer) {
      this.animationPlayer.destroy();
    }

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
