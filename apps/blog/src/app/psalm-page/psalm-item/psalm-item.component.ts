import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "blog-psalm-item",
  templateUrl: "./psalm-item.component.html",
  styleUrls: ["./psalm-item.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsalmItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
