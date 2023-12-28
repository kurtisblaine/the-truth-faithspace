import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash-es";
import { Observable, map } from "rxjs";
import { ProverbEntity } from "../../state/proverb/proverb.models";
import { createProverb } from "../../state/proverb/proverbs.actions";
import { getAllProverb } from "../../state/proverb/proverbs.selectors";

@Component({
  selector: "blog-proverb-list",
  templateUrl: "./proverb-list.component.html",
  styleUrls: ["./proverb-list.component.scss"],
})
export class ProverbListComponent implements OnInit {
  @Input() public update = false;

  public proverbs$!: Observable<ProverbEntity[]>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.proverbs$ = this.store
      .select(getAllProverb)
      .pipe(map((proverb) => cloneDeep(proverb)));
  }

  public doUpdate(proverb: ProverbEntity) {
    this.store.dispatch(
      createProverb({
        proverb,
      })
    );

    // this.router.navigateByUrl("proverbs");
  }

  public navigate(blog) {
    this.router.navigateByUrl("proverb-detail/" + blog.id, {
      state: { blog },
    });
  }
}
