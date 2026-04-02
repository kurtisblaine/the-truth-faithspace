import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnDestroy,
  signal,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
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
  public page = input<string>(); //comes from url

  public description = signal("");
  public narratorStyle = NarratorStyle;

  @ViewChild("textContainer", { read: ViewContainerRef, static: false }) private textContainer!: ViewContainerRef;

  constructor(private gospelItemService: GospelItemService) {
    super();
  }

  override ngAfterViewInit(): void {
    const components = this.gospelItemService.init();
    const gospelItemComponent = components.get(this.page());

    const component = this.textContainer.createComponent(gospelItemComponent);
    if (component.instance?.keywords) {
      this.setKeywords(component.instance.keywords);
    }
    if (component.instance?.description) {
      this.description.set(component.instance.description);
    }

    super.ngAfterViewInit();
  }

  ngOnDestroy(): void {
    this.textContainer.clear();
  }
}
