import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { ActivatedRoute, Router } from "@angular/router";
import { DeviceDetectorService } from "ngx-device-detector";
import { ReferenceTooltipComponent } from "../../shared/components/reference-tooltip/reference-tooltip.component";
import { SeoBaseComponent } from "../../shared/components/seo-base/seo-base.component";
import { CallFaithModule } from "../gospel-content/call-faith/call-faith.module";
import { CallGraceModule } from "../gospel-content/call-grace/call-grace.module";
import { DangerDeathModule } from "../gospel-content/danger-death/danger-death.module";
import { DangerSinModule } from "../gospel-content/danger-sin/danger-sin.module";
import { HopeLifeModule } from "../gospel-content/hope-life/hope-life.module";
import { ResponseModule } from "../gospel-content/response/response.module";
import { GospelSectionComponent } from "../gospel-section/gospel-section.component";

@Component({
  selector: "gospel-static-gospel",
  templateUrl: "./static-gospel.component.html",
  styleUrl: "./static-gospel.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatExpansionModule,
    MatButtonModule,
    DangerSinModule,
    DangerDeathModule,
    CallGraceModule,
    CallFaithModule,
    ResponseModule,
    HopeLifeModule,
    GospelSectionComponent,
    ReferenceTooltipComponent,
    CommonModule,
    NgOptimizedImage,
  ],
})
export class StaticGospelComponent extends SeoBaseComponent implements OnInit {
  public isMobile = signal(false);

  protected override keywords: string = "gospel, faith, righteous, live, kingdom, Jesus, revealed, truth";

  constructor(
    private router: Router,
    public activeRoute: ActivatedRoute,
    private deviceDetector: DeviceDetectorService
  ) {
    super();
  }

  ngOnInit() {
    this.isMobile.set(this.deviceDetector.isMobile());
  }

  public toAnchor(elementId: string): void {
    //TODO change the url route...
    document.getElementById(elementId).scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
  }
}
