import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadProverbs } from "../state/proverb/proverbs.actions";

@Component({
  selector: "blog-proverb-page",
  templateUrl: "./proverb-page.component.html",
  styleUrls: ["./proverb-page.component.scss"],
})
export class ProverbPageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadProverbs());
  }
}
