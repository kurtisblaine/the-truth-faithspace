import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { loadPsalms } from "../state/psalm/psalm.actions";
import { getPsalmLoaded } from "../state/psalm/psalm.selectors";

@Component({
  selector: "blog-psalm-page",
  templateUrl: "./psalm-page.component.html",
  styleUrls: ["./psalm-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsalmPageComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadPsalms());
    this.isLoading$ = this.store.select(getPsalmLoaded).pipe(map((isLoaded) => !isLoaded));
  }
}
