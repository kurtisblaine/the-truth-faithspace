import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { TemplateService } from "../template.service";
@Component({
  selector: "blog-gospel-item",
  templateUrl: "./gospel-item.component.html",
  styleUrl: "./gospel-item.component.css",
})
export class GospelItemComponent implements OnInit, AfterViewInit {
  public element: HTMLElement;

  @ViewChild("container", { read: ViewContainerRef }) private container: ViewContainerRef;

  constructor(private templateService: TemplateService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.container.createEmbeddedView(this.templateService.templateRef);
  }
}
