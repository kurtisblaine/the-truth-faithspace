import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadPsalms } from "../state/psalm/psalm.actions";

@Component({
  selector: "blog-psalm-page",
  templateUrl: "./psalm-page.component.html",
  styleUrls: ["./psalm-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsalmPageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadPsalms());
  }
}
