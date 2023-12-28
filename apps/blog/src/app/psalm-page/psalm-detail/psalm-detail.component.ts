import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { switchMap } from "rxjs";
import { PsalmEntity } from "../../state/psalm/psalm.models";
import { getById } from "../../state/psalm/psalm.selectors";

@Component({
  selector: "blog-psalm-detail",
  templateUrl: "./psalm-detail.component.html",
  styleUrls: ["./psalm-detail.component.css"],
})
export class PsalmDetailComponent implements OnInit {
  public blog: PsalmEntity;

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
