import { HttpEvent, HttpEventType } from "@angular/common/http";
import { Component, OnDestroy, signal } from "@angular/core";
import { faBook, faBookmark, faCreditCard, faFileAudio, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { Subscription } from "rxjs";
import { SeoBaseComponent } from "shared";
import { DownloadService } from "../shared/service/download.service";

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
  public pdfIcon = faFilePdf;
  public bookmarkIcon = faBookmark;
  public cardIcon = faCreditCard;

  public progress = signal(0);
  public isDownloading = signal(false);

  private subscription: Subscription;

  constructor(private downloadService: DownloadService) {
    super();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  downloadZip(filePath: string) {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.isDownloading.set(true);
    this.progress.set(0);

    this.subscription = this.downloadService.downloadZip(filePath).subscribe({
      next: (event: HttpEvent<Blob>) => {
        switch (event.type) {
          case HttpEventType.DownloadProgress:
            if (event.total) {
              this.progress.set(Math.round((event.loaded / event.total) * 100));
            }
            break;
          case HttpEventType.Response:
            this.isDownloading.set(false);
            this.downloadService.saveFile(event.body, "the-good-news-of-the-kingdom-of-god.zip");
            break;
        }
      },
      error: (err) => {
        this.isDownloading.set(false);
      },
    });
  }
}
