import { ChangeDetectionStrategy, Component, input, OnDestroy, ViewChild, ViewContainerRef } from "@angular/core";
import { NarratorStyle } from "shared";
import { SeoBaseComponent } from "../../shared/components/seo-base/seo-base.component";
import { GospelItemService } from "./gospel-item.service";

@Component({
  selector: "gospel-gospel-item",
  templateUrl: "./gospel-item.component.html",
  styleUrl: "./gospel-item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class GospelItemComponent extends SeoBaseComponent implements OnDestroy {
  protected override keywords: string = "Jesus, Gospel, Truth, Light, Peace, Hope, Love, Messiah, Good News";
  public page = input<string>();

  public narratorStyle = NarratorStyle;

  @ViewChild("textContainer", { read: ViewContainerRef }) private textContainer!: ViewContainerRef;

  constructor(private gospelItemService: GospelItemService) {
    super();
  }

  override ngAfterViewInit(): void {
    const components = this.gospelItemService.init();
    const gospelItemComponent = components.get(this.page());
    this.textContainer.createComponent(gospelItemComponent);

    super.ngAfterViewInit();
  }

  ngOnDestroy(): void {
    this.textContainer.clear();
  }
}
