import { ChangeDetectionStrategy, Component, input, OnDestroy, ViewChild, ViewContainerRef } from "@angular/core";
import { NarratorStyle, SeoBaseComponent } from "shared";
import { GospelItemService } from "./gospel-item.service";

@Component({
  selector: "gospel-gospel-item",
  templateUrl: "./gospel-item.component.html",
  styleUrl: "./gospel-item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class GospelItemComponent extends SeoBaseComponent implements OnDestroy {
  private readonly metaCaptionLimit = 150;

  public page = input<string>();

  public narratorStyle = NarratorStyle;

  @ViewChild("textContainer", { read: ViewContainerRef, static: false }) private textContainer!: ViewContainerRef;
  @ViewChild("content", { read: ViewContainerRef, static: false }) private content!: ViewContainerRef;

  constructor(private gospelItemService: GospelItemService) {
    super();
  }

  override ngAfterViewInit(): void {
    const components = this.gospelItemService.init();
    const gospelItemComponent = components.get(this.page());
    const component = this.textContainer.createComponent(gospelItemComponent);
    this.keywords = component.instance.keywords;

    super.ngAfterViewInit();

    const innerText = (this.content?.element?.nativeElement as HTMLElement)?.innerText;
    this.setDescription(innerText?.substring(0, this.metaCaptionLimit - 3) + "...");
  }

  ngOnDestroy(): void {
    this.textContainer.clear();
  }
}
