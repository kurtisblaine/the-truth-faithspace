import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Router, RouterModule } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { fadeInOut, SeoBaseComponent, slideInFromLeft, slideInFromRight } from "shared";
import { ItemsActions } from "../+state/items/items.actions";
import { ItemEntity } from "../+state/items/items.reducer";
import { selectAllItems, selectItemsLoaded } from "../+state/items/items.selectors";
import { ItemListComponent } from "./blog-list/blog-list.component";

@Component({
  selector: "app-blog-page",
  imports: [ItemListComponent, MatProgressSpinnerModule, RouterModule, CommonModule],
  animations: [slideInFromRight, slideInFromLeft, fadeInOut],
  templateUrl: "./blog-page.component.html",
  styleUrl: "./blog-page.component.scss",
})
export class BlogPageComponent extends SeoBaseComponent implements OnInit {
  public items$!: Observable<ItemEntity[]>;
  public isLoading$!: Observable<boolean>;

  constructor(private store: Store, private router: Router) {
    super();
  }

  public ngOnInit() {
    this.store.dispatch(ItemsActions.loadItems());

    this.items$ = this.store.select(selectAllItems);
    this.isLoading$ = this.store.select(selectItemsLoaded).pipe(map((r) => !r));
  }
}
