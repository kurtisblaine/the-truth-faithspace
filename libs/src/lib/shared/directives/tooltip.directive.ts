import { coerceNumberProperty } from "@angular/cdk/coercion";
import {
  ConnectedPosition,
  HorizontalConnectionPos,
  OriginConnectionPosition,
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
  VerticalConnectionPos,
} from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { ComponentRef, Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from "@angular/core";
import { TooltipComponent, TooltipPosition } from "@angular/material/tooltip";

@Directive({
  selector: "[libTooltip]",
  standalone: false,
})
export class TooltipDirective implements OnInit, OnDestroy {
  private readonly defaultDelay = 0;
  private tooltipRef!: ComponentRef<TooltipComponent>;
  private overlayRef!: OverlayRef;
  private htmlElement!: HTMLElement;

  @Input("libTooltip") public message!: string;

  private _verticalOverflow!: number;
  @Input() public set verticalOverflow(value) {
    this._verticalOverflow = coerceNumberProperty(value);
  }
  public get verticalOverflow() {
    return this._verticalOverflow;
  }

  @Input() public lineBreak = "auto";

  private _position: TooltipPosition = "below";
  @Input("libTooltipPosition") public get position() {
    return this._position;
  }
  public set position(value: TooltipPosition) {
    this._position = value;

    if (!this.overlayRef) this.createOverlayReference();
  }

  @HostListener("pointerover") public onPointerOver() {
    if (this.isTextOverflowing(this.htmlElement)) {
      if (!this.overlayRef.hasAttached()) this.createTooltipReference();

      this.tooltipRef.instance.show(this.defaultDelay);
    }
  }

  @HostListener("pointerout") public onPointerOut() {
    this.overlayRef.detach();
  }

  constructor(
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private overlay: Overlay
  ) {}

  public ngOnInit() {
    this.htmlElement = this.elementRef.nativeElement as HTMLElement;

    if (!this.overlayRef) this.createOverlayReference();

    if (this.verticalOverflow) {
      this.htmlElement.style.overflow = "hidden";
      this.htmlElement.style.display = "-webkit-box";
      this.htmlElement.style.webkitLineClamp = this.verticalOverflow.toString();
      this.htmlElement.style.webkitBoxOrient = "vertical";
    } else {
      this.htmlElement.style.textOverflow = "ellipsis";
      this.htmlElement.style.whiteSpace = "nowrap";
      this.htmlElement.style.overflow = "hidden";
      this.htmlElement.style.display = "block";
    }

    this.htmlElement.style.lineBreak = this.lineBreak;
  }

  public ngOnDestroy() {
    if (this.overlayRef.hasAttached()) this.overlayRef.detach();

    this.overlayRef.dispose();
  }

  private createOverlayReference() {
    const positions = this.getPositions();
    const positionStrategy = this.getPositionStrategy(positions);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  private createTooltipReference() {
    this.tooltipRef = this.overlayRef.attach(new ComponentPortal(TooltipComponent));
    this.tooltipRef.instance.message = this.message ? this.message : this.htmlElement?.innerHTML;
  }

  private getPositionStrategy = (positions: ConnectedPosition[]) =>
    this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withFlexibleDimensions(false)
      .withViewportMargin(5)
      .withPositions(positions);

  private isTextOverflowing = (element: HTMLElement) =>
    this.verticalOverflow ? element.offsetHeight < element.scrollHeight : element.offsetWidth < element.scrollWidth;

  private getPositions(): ConnectedPosition[] {
    const position = this.position;

    let originPosition: OriginConnectionPosition;
    if (position === "above" || position === "below")
      originPosition = {
        originX: "center",
        originY: position === "above" ? "top" : "bottom",
      };
    else if (position === "before" || position === "left") {
      originPosition = { originX: "start", originY: "center" };
    } else if (position === "after" || position === "right") {
      originPosition = { originX: "end", originY: "center" };
    }

    const { offsetOriginX, offsetOriginY } = this.invertOriginPosition(
      originPosition!.originX,
      originPosition!.originY
    );

    return [
      {
        ...originPosition!,
        overlayX: offsetOriginX,
        overlayY: offsetOriginY,
      },
      {
        originX: offsetOriginX,
        originY: offsetOriginY,
        overlayX: originPosition!.originX,
        overlayY: originPosition!.originY,
      },
    ];
  }

  private invertOriginPosition(x: HorizontalConnectionPos, y: VerticalConnectionPos) {
    if (this.position === "above" || this.position === "below") {
      if (y === "top") y = "bottom";
      else if (y === "bottom") y = "top";
    } else {
      if (x === "end") x = "start";
      else if (x === "start") x = "end";
    }

    return { offsetOriginX: x, offsetOriginY: y };
  }
}
