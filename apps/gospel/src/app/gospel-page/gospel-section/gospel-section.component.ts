import { AfterViewInit, ChangeDetectorRef, Component, computed, inject, input, Input, Signal } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BASE_URL, LinkComponent, NarratorComponent, NarratorStyle } from "shared";
import { DashToTitlePipe } from "../../shared/pipes/dash-title.pipe";
import { GospelItemService } from "../gospel-item/gospel-item.service";

@Component({
  selector: "blog-gospel-section",
  templateUrl: "./gospel-section.component.html",
  styleUrl: "./gospel-section.component.scss",
  imports: [MatCardModule, MatProgressSpinnerModule, NarratorComponent, LinkComponent, DashToTitlePipe],
})
export class GospelSectionComponent implements AfterViewInit {
  @Input() public isLightMode = true;
  @Input() public isFloater = false;

  public page = input<string>();
  public baseUrl = inject(BASE_URL);

  public audioFileLink: Signal<string>;

  public narratorStyle = NarratorStyle;

  constructor(private changeDetector: ChangeDetectorRef, private gospelItemService: GospelItemService) {
    const gospelItems = this.gospelItemService.init();
    this.audioFileLink = computed(() => gospelItems.get(this.page()).audioFile);
  }

  public ngAfterViewInit(): void {
    this.changeDetector.detectChanges();
  }

  public handleOnScrollEvent(event: Event) {
    event.stopPropagation();
  }
}
