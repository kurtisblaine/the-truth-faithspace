import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { switchMap } from "rxjs";
import { SeoBaseComponent } from "../../shared/components/seo-base/seo-base.component";
import { loadPsalms } from "../../state/psalm/psalm.actions";
import { PsalmEntity } from "../../state/psalm/psalm.models";
import { getById } from "../../state/psalm/psalm.selectors";

@Component({
  selector: "blog-psalm-detail",
  templateUrl: "./psalm-detail.component.html",
  styleUrls: ["./psalm-detail.component.scss"],
  standalone: false,
})
export class PsalmDetailComponent extends SeoBaseComponent implements OnInit {
  public blog: PsalmEntity;

  protected override keywords: string = "psalm, song, heart, string, pluck, joy, praise, love, hope, sing, confess";

  constructor(private store: Store, private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(loadPsalms());

    this.route.params
      .pipe(
        switchMap((p) => {
          return this.store.select(getById(p["id"]));
        })
      )
      .subscribe((r) => {
        this.blog = r;
      });
  }
}
