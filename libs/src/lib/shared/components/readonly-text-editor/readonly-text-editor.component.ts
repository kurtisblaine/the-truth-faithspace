import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, Pipe, PipeTransform, ViewEncapsulation } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { DomSanitizer } from "@angular/platform-browser";
import { NarratorComponent, NarratorStyle } from "../narrator/narrator.component";

@Pipe({
  name: "safeHtml",
  standalone: true,
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

@Component({
  selector: "lib-readonly-text-editor",
  imports: [CommonModule, NarratorComponent, MatButtonModule, SafeHtmlPipe],
  templateUrl: "./readonly-text-editor.component.html",
  styleUrl: "./readonly-text-editor.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  // host: { ngSkipHydration: "true" },
})
export class ReadonlyTextEditorComponent {
  public html = input.required<string>();
  public showReadMore = input<boolean>(true);
  public showAudioReader = input<boolean>(true);
  public link = input<string>();

  public narratorStyle = NarratorStyle;

  public isReadMore = false;
  public hasHtml = false;

  constructor() {
    this.hasHtml = !!this.html;
  }

  goToLink() {
    this.isReadMore = !this.isReadMore;
    // window.open(this.link(), "_blank");
  }

  //this is required for dark mode to look correctly
  removeColor(html: string) {
    return html?.replace(/color:/g, "");
  }
}
