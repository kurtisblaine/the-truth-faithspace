import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "blog-psalm-page",
  templateUrl: "./psalm-page.component.html",
  styleUrls: ["./psalm-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsalmPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
