import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core";
import { TemplateService } from "../template.service";
@Component({
  selector: "blog-gospel-item",
  templateUrl: "./gospel-item.component.html",
  styleUrl: "./gospel-item.component.css",
})
export class GospelItemComponent implements OnInit, AfterViewInit {
  @Input() public title: string;
  private templateRef: TemplateRef<any>;

  @ViewChild("container", { read: ViewContainerRef }) private container: ViewContainerRef;

  constructor(private templateService: TemplateService) {}

  ngOnInit() {
    this.templateRef = this.templateService.get(this.title);
  }

  ngAfterViewInit() {
    this.container.createEmbeddedView(this.templateRef);
  }
}
