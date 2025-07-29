import { ChangeDetectionStrategy, Component, input } from "@angular/core";
import { NarratorStyle } from "shared";
import { SeoBaseComponent } from "../../shared/components/seo-base/seo-base.component";

@Component({
  selector: "gospel-gospel-item",
  templateUrl: "./gospel-item.component.html",
  styleUrl: "./gospel-item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class GospelItemComponent extends SeoBaseComponent {
  protected override keywords: string = "Jesus, Gospel, Truth, Light, Peace, Hope, Love, Messiah, Good News";

  public page = input<string>();

  public narratorStyle = NarratorStyle;
}
