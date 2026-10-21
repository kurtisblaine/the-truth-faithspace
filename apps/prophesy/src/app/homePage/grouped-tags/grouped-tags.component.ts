import { KeyValue } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, input, OnDestroy, OnInit, output, signal } from "@angular/core";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MatChipSelectionChange, MatChipsModule } from "@angular/material/chips";
import { ActivatedRoute } from "@angular/router";
import { Subscription, take } from "rxjs";
import { fadeInOut } from "shared";
import { Tag, TagColorNameMap, TagKey } from "../../+state/items/items.models";
import { TagService } from "../tag.service";

@Component({
  selector: "app-grouped-tags",
  imports: [MatChipsModule, ReactiveFormsModule],
  templateUrl: "./grouped-tags.component.html",
  styleUrl: "./grouped-tags.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut],
})
export class GroupedTagsComponent implements OnDestroy, OnInit {
  public group = input.required<KeyValue<string, Tag[]>>();
  public onToggleTags = output<{ tags: Tag[]; event: MatChipSelectionChange }>();

  public filteredTags = signal<Tag[]>([]);
  public filterType: "include" | "exclude";

  public isShown = signal<boolean>(false);
  public collapsedTagType = computed(() => TagColorNameMap.get(this.group().key));

  public selectedTagsControl = new FormControl<Tag[]>([]);

  private formSubscription!: Subscription;
  private routeSubscription!: Subscription;
  private resetSubscription!: Subscription;
  private filterSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private tagService: TagService) {}

  ngOnInit() {
    this.filteredTags.set(this.group().value);

    this.resetSubscription = this.tagService.reset$.subscribe((shouldReset) => {
      if (shouldReset) this.reset();
    });

    this.formSubscription = this.selectedTagsControl.valueChanges.subscribe((value) => {
      if (!value.length) {
        this.isShown.set(false);
      } else if (value.length === this.group().value.length) {
        this.isShown.set(true);
      }
    });

    this.routeSubscription = this.route.queryParams.pipe(take(1)).subscribe((queryParams) => {
      const queryParamTags = queryParams["tags"] as string;
      if (queryParamTags) {
        const tagList = (queryParamTags.split(",") as TagKey[]).map((key) => Tag[key]);
        if (this.group().value.some((tag) => tagList.some((t) => t === tag))) {
          this.expandTags(tagList);
        }
      }

      const queryParamFilter = queryParams["filter"] as "include" | "exclude";
      if (queryParamFilter === "exclude") {
        this.isShown.set(true);
      }
    });
  }

  ngOnDestroy() {
    this.formSubscription?.unsubscribe();
    this.routeSubscription?.unsubscribe();
    this.resetSubscription?.unsubscribe();
    this.filterSubscription?.unsubscribe();
  }

  reset() {
    this.selectedTagsControl.setValue([]);
    // this.toggleTags([], { selected: false, isUserInput: true } as MatChipSelectionChange);
  }

  expandTags(tags: Tag[] = this.group().value) {
    this.isShown.set(true);
    this.selectedTagsControl.setValue(tags);
    this.toggleTags(tags, { selected: true, isUserInput: true } as MatChipSelectionChange);
  }

  toggleTags(tags: Tag[], event: MatChipSelectionChange) {
    if (!event?.isUserInput) return;

    this.onToggleTags.emit({ tags, event });
  }
}
