import { AfterViewInit, ChangeDetectorRef, Component, inject, input, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { BASE_URL, LinkComponent, NarratorComponent, NarratorStyle } from "shared";

@Component({
  selector: "blog-gospel-section",
  templateUrl: "./gospel-section.component.html",
  styleUrl: "./gospel-section.component.scss",
  imports: [MatCardModule, MatProgressSpinnerModule, NarratorComponent, LinkComponent],
})
export class GospelSectionComponent implements AfterViewInit {
  @Input() public isLightMode = true;
  @Input() public isFloater = false;

  public page = input<string>();
  public baseUrl = inject(BASE_URL);

  public narratorStyle = NarratorStyle;

  constructor(private changeDetector: ChangeDetectorRef) {}

  public ngAfterViewInit(): void {
    this.changeDetector.detectChanges();
  }

  public handleOnScrollEvent(event: Event) {
    event.stopPropagation();
  }
}
