import { Location } from "@angular/common";
import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { NarratorStyle } from "libs/src/lib/shared/components/narrator/narrator.component";
import { Subscription } from "rxjs";
import { TemplateService } from "../template.service";

@Component({
  selector: "blog-gospel-item",
  templateUrl: "./gospel-item.component.html",
  styleUrl: "./gospel-item.component.scss",
  standalone: false,
})
export class GospelItemComponent implements OnInit, AfterViewInit, OnDestroy {
  public narratorStyle = NarratorStyle;
  private subscription: Subscription;

  @Input() public title: string;
  public componentType: Type<any>;

  @ViewChild("container", { read: ViewContainerRef }) private container: ViewContainerRef;

  @HostListener("window:beforeunload", ["$event"])
  public goBack() {
    this.location.back();
  }

  constructor(private templateService: TemplateService, private router: Router, private location: Location) {}

  ngOnInit() {
    this.componentType = this.templateService.get(this.title);

    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const browserRefresh = !this.router.navigated;
        if (browserRefresh) this.goBack();
      }
    });
  }

  ngOnDestroy() {
    window.removeEventListener("beforeunload", this.goBack);
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.container.createComponent(this.componentType);
  }
}
