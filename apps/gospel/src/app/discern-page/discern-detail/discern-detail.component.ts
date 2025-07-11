import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, tap } from "rxjs";
import { SeoBaseComponent } from "../../shared/components/seo-base/seo-base.component";
import { loadDiscernments } from "../../state/discern/discern.actions";
import { DiscernEntity } from "../../state/discern/discern.models";
import { getById } from "../../state/discern/discern.selectors";

@Component({
  selector: "blog-discern-detail",
  templateUrl: "./discern-detail.component.html",
  styleUrls: ["./discern-detail.component.scss"],
  standalone: false,
})
export class DiscernDetailComponent extends SeoBaseComponent implements OnInit {
  public blog$: Observable<DiscernEntity>;

  protected override keywords: string =
    "discernment, judgement, judge, discern, truth, lies,  falsehood, understanding, light, darkness";

  constructor(private store: Store, private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(loadDiscernments());

    const id = this.route.snapshot.paramMap.get("id");
    this.blog$ = this.store.select(getById(id)).pipe(tap(() => this.init()));
  }
}
