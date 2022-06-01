import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "blog-psalm-list",
  templateUrl: "./psalm-list.component.html",
  styleUrls: ["./psalm-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsalmListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
