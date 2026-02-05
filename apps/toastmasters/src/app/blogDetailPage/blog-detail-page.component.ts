import { CommonModule, DatePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, tap } from "rxjs";
import { ReadonlyTextEditorComponent, SeoBaseComponent } from "shared";
import { ItemsActions } from "../+state/items/items.actions";
import { ItemEntity } from "../+state/items/items.reducer";
import { getById } from "../+state/items/items.selectors";

@Component({
  selector: "app-item-detail",
  templateUrl: "./blog-detail-page.component.html",
  styleUrl: "./blog-detail-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCardModule, DatePipe, ReadonlyTextEditorComponent, CommonModule],
})
export class ItemDetailComponent extends SeoBaseComponent implements OnInit {
  public item$!: Observable<ItemEntity | undefined>;

  constructor(private store: Store, private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(ItemsActions.loadItems());

    const id = this.route.snapshot.paramMap.get("id");
    this.item$ = this.store.select(getById(id!)).pipe(tap(() => this.init()));
  }
}
