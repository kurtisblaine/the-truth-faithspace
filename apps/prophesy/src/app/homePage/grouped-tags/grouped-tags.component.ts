import { KeyValue } from "@angular/common";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  input,
  OnDestroy,
  OnInit,
  output,
  signal,
} from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
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
export class GroupedTagsComponent implements OnInit, OnDestroy {
  public group = input.required<KeyValue<string, Tag[]>>();
  public onToggleTags = output<{ tags: Tag[]; event: MatChipSelectionChange }>();

  public filteredTags = signal<Tag[]>([]);

  private subscription!: Subscription;

  public isShown = signal<boolean>(false);
  public collapsedTagType = computed(() => TagColorNameMap.get(this.group().key));

  public selectedTagsControl = new FormControl<Tag[]>([]);

  constructor(private route: ActivatedRoute, private tagService: TagService, private cd: ChangeDetectorRef) {
    this.tagService.reset$.pipe(takeUntilDestroyed()).subscribe((shouldReset) => {
      if (shouldReset) this.reset();
    });
  }

  ngOnInit() {
    this.filteredTags.set(this.group().value);

    this.subscription = this.route.queryParams.pipe(take(1)).subscribe((queryParams) => {
      const queryParamFilter = queryParams["filter"] as "include" | "exclude";
      const queryParamTags = queryParams["tags"] as string;

      if (this.tagService.previousFilteringOption() === "include" && queryParamFilter === "exclude") {
        return;
      }

      if (queryParamTags) {
        const tagList = (queryParamTags.split(",") as TagKey[]).map((key) => Tag[key]);
        if (this.group().value.some((tag) => tagList.some((t) => t === tag))) {
          this.expandTags(tagList, { isUserInput: true, selected: true } as MatChipSelectionChange);
        }
      }

      if (queryParamFilter === "exclude") {
        this.isShown.set(true);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  reset() {
    this.selectedTagsControl.setValue([]);
    this.isShown.set(false);
  }

  expandTags(tags: Tag[], event: MatChipSelectionChange) {
    if (!event?.isUserInput) return;

    this.isShown.set(true);

    this.selectedTagsControl.setValue(tags);
    this.cd.detectChanges();

    this.toggleTags(tags, { selected: true, isUserInput: true } as MatChipSelectionChange);
  }

  toggleTags(tags: Tag[], event: MatChipSelectionChange) {
    if (!event?.isUserInput) return;

    this.onToggleTags.emit({ tags, event });
  }
}
