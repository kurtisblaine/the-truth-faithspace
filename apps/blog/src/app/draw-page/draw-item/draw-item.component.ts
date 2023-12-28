import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "blog-draw-item",
  templateUrl: "./draw-item.component.html",
  styleUrls: ["./draw-item.component.css"],
})
export class DrawItemComponent implements OnInit {
  public fileName: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((r) => {
      this.fileName = r["id"];
    });
  }
}
