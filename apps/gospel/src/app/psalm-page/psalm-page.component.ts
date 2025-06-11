import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { SeoBaseComponent } from "../shared/components/seo-base/seo-base.component";
import { loadPsalms } from "../state/psalm/psalm.actions";
import { getPsalmLoaded } from "../state/psalm/psalm.selectors";

@Component({
  selector: "blog-psalm-page",
  templateUrl: "./psalm-page.component.html",
  styleUrls: ["./psalm-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class PsalmPageComponent extends SeoBaseComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public override keywords: string = "psalms, songs, spiritual, hymn, music, heart, God";

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(loadPsalms());
    this.isLoading$ = this.store.select(getPsalmLoaded).pipe(map((isLoaded) => !isLoaded));
  }
}
