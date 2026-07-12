import { HttpClient } from "@angular/common/http";
import { Component, OnDestroy } from "@angular/core";
import { faBook, faBookmark, faCreditCard, faFileAudio } from "@fortawesome/free-solid-svg-icons";
import { Subscription } from "rxjs";
import { SeoBaseComponent } from "shared";

@Component({
  selector: "blog-tract-page",
  templateUrl: "./tract-page.component.html",
  styleUrl: "./tract-page.component.scss",
  standalone: false,
})
export class TractPageComponent extends SeoBaseComponent implements OnDestroy {
  override keywords: string = "tracts, bookmarks, cards, reminder, print, truth, eternity";

  public zipFileIcon = faFileAudio;
  public bookIcon = faBook;
  public bookmarkIcon = faBookmark;
  public cardIcon = faCreditCard;

  private subscription: Subscription;

  constructor(private httpClient: HttpClient) {
    super();
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

  downloadZip(filePath: string) {
    if (this.subscription) this.subscription.unsubscribe();

    this.subscription = this.httpClient.get(filePath, { responseType: "blob" }).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "the-good-news-of-the-kingdom-of-god.zip";
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
