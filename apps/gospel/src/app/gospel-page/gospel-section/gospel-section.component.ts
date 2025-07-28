import { AfterViewInit, ChangeDetectorRef, Component, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { NarratorComponent, NarratorStyle } from "libs/src/lib/shared/components/narrator/narrator.component";

@Component({
  selector: "blog-gospel-section",
  templateUrl: "./gospel-section.component.html",
  styleUrl: "./gospel-section.component.scss",
  imports: [MatCardModule, MatProgressSpinnerModule, NarratorComponent],
})
export class GospelSectionComponent implements AfterViewInit {
  @Input() public isLightMode = true;
  @Input() public isFloater = false;

  public narratorStyle = NarratorStyle;

  constructor(private changeDetector: ChangeDetectorRef) {}

  public ngAfterViewInit(): void {
    this.changeDetector.detectChanges();
  }

  public handleOnScrollEvent(event: Event) {
    event.stopPropagation();
  }
}
