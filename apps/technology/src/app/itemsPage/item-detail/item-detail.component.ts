import { DatePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, effect, OnInit, Signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { ItemsActions } from "../../+state/items/items.actions";
import { ItemEntity } from "../../+state/items/items.reducer";
import { getById } from "../../+state/items/items.selectors";
import { SeoBaseComponent } from "../../../../../../libs/src";

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.component.html",
  styleUrl: "./item-detail.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ItemDetailComponent extends SeoBaseComponent implements OnInit {
  public item!: Signal<ItemEntity | undefined>;

  protected override keywords: string =
    "blog, technology, tech, ai, truth, falsehood, dark web, truth, revealed, uncovered, web, internet";

  constructor(private store: Store, private route: ActivatedRoute, private datePipe: DatePipe) {
    super();

    effect(() => {
      if (!this.item()?.id) return;

      this.setTitle(this.item()!.title, false, " | Beware of Idols");
      const date = this.datePipe.transform(this.item()!.date);
      this.setDescription(`${date}: ${this.item()!.title}. A Christian's blog post on the following topic.`);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(ItemsActions.loadItems());

    const id = this.route.snapshot.paramMap.get("id");
    this.item = this.store.selectSignal(getById(id!));
  }
}
