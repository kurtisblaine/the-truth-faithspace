import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { TemplateService } from "../template.service";
@Component({
  selector: "blog-gospel-item",
  templateUrl: "./gospel-item.component.html",
  styleUrl: "./gospel-item.component.css",
})
export class GospelItemComponent implements OnInit, AfterViewInit {
  public title: string;

  @ViewChild("container", { read: ViewContainerRef }) private container: ViewContainerRef;

  constructor(private templateService: TemplateService) {}

  ngOnInit() {
    this.title = this.templateService.title;
  }

  ngAfterViewInit() {
    this.container.createEmbeddedView(this.templateService.templateRef);
  }
}
