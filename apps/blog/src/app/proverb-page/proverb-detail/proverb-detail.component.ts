import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { switchMap } from "rxjs";
import { ProverbEntity } from "../../state/proverb/proverb.models";
import { getById } from "../../state/proverb/proverbs.selectors";

@Component({
  selector: "blog-proverb-detail",
  templateUrl: "./proverb-detail.component.html",
  styleUrls: ["./proverb-detail.component.css"],
})
export class ProverbDetailComponent implements OnInit {
  public blog: ProverbEntity;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
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
