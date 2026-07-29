import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "lib-link",
  template: `
    <a
      href="{{ link }}"
      [target]="getTarget()"
      (click)="navigateToAbsolute($event)"
      rel="noopener"
      [ngStyle]="{ 'text-decoration': isNewPage && !textDecorationOverride ? 'underline' : 'none' }"
    >
      <ng-content></ng-content>
    </a>
  `,
  styles: ``,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input() public link!: string;
  @Input() public isNewPage = true;
  @Input() public textDecorationOverride = false;

  private router = inject(Router);

  getTarget(): string {
    return this.isNewPage ? "_blank" : "_self";
  }

  //this is needed so that we can embed the full absolute url in the static html
  //but we do not want the whole app to refresh when navigating to a link in the same origin.
  navigateToAbsolute(event: MouseEvent) {
    event.preventDefault();

    const urlObj = new URL(this.link);

    //same origin and new page
    if (urlObj.origin === window.location.origin && this.isNewPage) {
      const urlTree = this.router.createUrlTree([urlObj.pathname], {
        queryParams: urlObj.searchParams as any,
        fragment: urlObj.hash ? (urlObj.hash.replace("#", "") as any) : null,
      });
      const url = this.router.serializeUrl(urlTree);
      window.open(url, "_blank");
    }
    //same origin and no new page
    else if (urlObj.origin === window.location.origin && !this.isNewPage) {
      this.router.navigate([urlObj.pathname], {
        queryParams: urlObj.searchParams as any,
        fragment: urlObj.hash ? (urlObj.hash.replace("#", "") as any) : null,
      });
    }
    //different origin and new page
    else if (this.isNewPage) {
      window.open(this.link, "_blank");
    } else {
      window.location.href = this.link;
    }
  }
}
