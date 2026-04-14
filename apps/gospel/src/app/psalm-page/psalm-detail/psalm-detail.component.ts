import { DatePipe } from "@angular/common";
import { Component, effect, OnInit, Signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { SeoBaseComponent } from "shared";
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
  public blog: Signal<PsalmEntity>;

  protected override keywords: string = "psalm, song, heart, string, pluck, joy, praise, love, hope, sing, confess";

  constructor(private store: Store, private route: ActivatedRoute, private datePipe: DatePipe) {
    super();

    effect(() => {
      if (!this.blog()?.id) return;

      this.setTitle(this.blog().title, false, " | Poem");
      const date = this.datePipe.transform(this.blog().date);
      this.setDescription(`${date}: ${this.blog().title}. A Christian's psalm on the following topic.`);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadPsalms());

    const id = this.route.snapshot.paramMap.get("id");
    this.blog = this.store.selectSignal(getById(id));
  }
}
