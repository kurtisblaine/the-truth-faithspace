import { DatePipe } from "@angular/common";
import { Component, effect, OnInit, Signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { SeoBaseComponent } from "shared";
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
  public blog: Signal<DiscernEntity>;

  protected override keywords: string =
    "discernment, judgement, judge, discern, truth, lies,  falsehood, understanding, light, darkness";

  constructor(private store: Store, private route: ActivatedRoute, private datePipe: DatePipe) {
    super();

    effect(() => {
      if (!this.blog()?.id) return;

      this.setTitle(this.blog().title);
      const date = this.datePipe.transform(this.blog().date);
      this.setDescription(`${date}: ${this.blog().title}. A Christian's discernment on the following topic.`);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadDiscernments());

    const id = this.route.snapshot.paramMap.get("id");
    this.blog = this.store.selectSignal(getById(id));
  }
}
