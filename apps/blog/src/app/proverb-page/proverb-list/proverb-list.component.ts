import { Component, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ProverbEntity } from "../../state/proverb/proverb.models";
import { getAllProverb } from "../../state/proverb/proverbs.selectors";

@Component({
  selector: "blog-proverb-list",
  templateUrl: "./proverb-list.component.html",
  styleUrls: ["./proverb-list.component.scss"],
})
export class ProverbListComponent implements OnInit {
  @Input() public update = false

  public proverbs$!: Observable<ProverbEntity[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.proverbs$ = this.store.select(getAllProverb);
  }
}
